import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the DayBound page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>DayBound — Calm, practical trip planning/);
  assert.match(html, /Plan the trip/);
  assert.match(html, /Barcelona, Spain/);
  assert.match(html, /daybound-screen\.png/);
  assert.match(html, /StrengthPlan/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the two product routes with product-specific content", async () => {
  const [strengthResponse, contactResponse] = await Promise.all([
    render("/strengthplan/"),
    render("/contact/"),
  ]);
  assert.equal(strengthResponse.status, 200);
  assert.equal(contactResponse.status, 200);
  const strengthHtml = await strengthResponse.text();
  const contactHtml = await contactResponse.text();
  assert.match(strengthHtml, /StrengthPlan/);
  assert.match(strengthHtml, /strengthplan-screen\.png/);
  assert.match(strengthHtml, /Apple Watch/);
  assert.match(contactHtml, /Contact Stride Software/);
  assert.match(contactHtml, /christoferpiedra2001@gmail.com/);
});

test("static export contains every GitHub Pages entry point", async () => {
  for (const file of ["index.html", "contact/index.html", "strengthplan/index.html", "404.html"]) {
    await access(new URL(`../dist/client/${file}`, import.meta.url));
  }
  const workflow = await readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");
  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});
