import Link from "next/link";
import { Icon } from "./icons";
import { SiteFooter, SiteHeader, siteRoute } from "./site-chrome";

export default function ContactView() {
  return (
    <div className="contact-page">
      <SiteHeader active="contact" />
      <main>
        <section className="contact-hero shell">
          <div><p className="eyebrow">Contact Stride Software</p><h1>Let’s move something<br /><em>forward.</em></h1><p className="hero-lede">Questions about DayBound or StrengthPlan? Interested in what we’re building? Send a note—we read every message.</p></div>
          <div className="contact-card"><span className="contact-asterisk"><Icon name="spark" /></span><p>THE BEST WAY TO REACH US</p><a href="mailto:christoferpiedra2001@gmail.com?subject=Hello%20Stride%20Software">christoferpiedra2001<br/>@gmail.com <Icon name="arrow-up-right" /></a><small>We usually reply within 1–2 business days.</small></div>
        </section>

        <section className="shell contact-options">
          <article><span>01</span><p className="eyebrow">Product support</p><h2>Need help with an app?</h2><p>Tell us which product you’re using, what you expected to happen, and what you saw instead. Screenshots are always helpful.</p><a href="mailto:christoferpiedra2001@gmail.com?subject=Product%20support">Get product support <Icon name="arrow-up-right" /></a></article>
          <article><span>02</span><p className="eyebrow">Business</p><h2>Have a partnership idea?</h2><p>We’re open to thoughtful conversations with people and teams who care about focused, useful software.</p><a href="mailto:christoferpiedra2001@gmail.com?subject=Partnership%20idea">Start a conversation <Icon name="arrow-up-right" /></a></article>
        </section>

        <section className="contact-products shell"><div><p className="eyebrow">Our products</p><h2>Explore what we’re building.</h2></div><div className="contact-product-links"><Link href={siteRoute("/daybound")}><span className="mini-product-mark daybound-mini">DB</span><p><strong>DayBound</strong><small>Calm, practical trip planning.</small></p><b><Icon name="arrow-right" /></b></Link><Link href={siteRoute("/strengthplan")}><span className="mini-product-mark strength-mini">SP</span><p><strong>StrengthPlan</strong><small>Plan. Train. Progress.</small></p><b><Icon name="arrow-right" /></b></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
