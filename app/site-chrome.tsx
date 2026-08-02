import Link from "next/link";
import { Icon } from "./icons";

export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path || "/"}` || "/";
}

/**
 * The canonical site is a single document. Keep the hash in the URL so each
 * product still feels like its own page while GitHub Pages only needs to
 * serve one entry point on the custom domain.
 */
export function siteRoute(path: string) {
  const page = path === "/" || path === "/contact" ? "" : path.replace(/^\//, "").replace(/\/$/, "");
  return `${sitePath("/")}${page ? `#${page}` : ""}`;
}

export function SiteHeader({ active }: { active: "daybound" | "strengthplan" | "contact" }) {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href={siteRoute("/")} aria-label="Stride Software home"><span className="brand-mark" aria-hidden="true">S</span><span>STRIDE <small>SOFTWARE</small></span></Link>
        <nav aria-label="Primary navigation">
          <Link className={active === "daybound" ? "active" : ""} href={siteRoute("/daybound")}>DayBound</Link>
          <Link className={active === "strengthplan" ? "active" : ""} href={siteRoute("/strengthplan")}>StrengthPlan</Link>
          <Link className={`contact-nav ${active === "contact" ? "active" : ""}`} href={siteRoute("/")}>Contact <Icon name="arrow-up-right" /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div><Link className="brand footer-brand" href={siteRoute("/")}><span className="brand-mark" aria-hidden="true">S</span><span>STRIDE <small>SOFTWARE</small></span></Link><p>Small software. Meaningful momentum.</p></div>
        <div className="footer-products"><span>PRODUCTS</span><Link href={siteRoute("/daybound")}>DayBound</Link><Link href={siteRoute("/strengthplan")}>StrengthPlan</Link></div>
        <div className="footer-products"><span>COMPANY</span><Link href={siteRoute("/")}>Contact</Link><a href="mailto:christoferpiedra2001@gmail.com">Email us</a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Stride Software LLC</span><span>Built with care in New York.</span></div>
    </footer>
  );
}
