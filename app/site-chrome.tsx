import Link from "next/link";
import { Icon } from "./icons";

export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path || "/"}` || "/";
}

export function SiteHeader({ active }: { active: "daybound" | "strengthplan" | "contact" }) {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href={sitePath("/")} aria-label="Stride Software home"><span className="brand-mark" aria-hidden="true">S</span><span>STRIDE <small>SOFTWARE</small></span></Link>
        <nav aria-label="Primary navigation">
          <Link className={active === "daybound" ? "active" : ""} href={sitePath("/daybound")}>DayBound</Link>
          <Link className={active === "strengthplan" ? "active" : ""} href={sitePath("/strengthplan")}>StrengthPlan</Link>
          <Link className={`contact-nav ${active === "contact" ? "active" : ""}`} href={sitePath("/")}>Contact <Icon name="arrow-up-right" /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div><Link className="brand footer-brand" href={sitePath("/")}><span className="brand-mark" aria-hidden="true">S</span><span>STRIDE <small>SOFTWARE</small></span></Link><p>Small software. Meaningful momentum.</p></div>
        <div className="footer-products"><span>PRODUCTS</span><Link href={sitePath("/daybound")}>DayBound</Link><Link href={sitePath("/strengthplan")}>StrengthPlan</Link></div>
        <div className="footer-products"><span>COMPANY</span><Link href={sitePath("/")}>Contact</Link><a href="mailto:christoferpiedra2001@gmail.com">Email us</a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Stride Software LLC</span><span>Built with care in New York.</span></div>
    </footer>
  );
}
