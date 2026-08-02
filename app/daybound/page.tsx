import type { Metadata } from "next";
import Link from "next/link";
import { AppScreenshot, DayBoundPreview } from "../product-previews";
import { Icon } from "../icons";
import { SiteFooter, SiteHeader, sitePath } from "../site-chrome";

export const metadata: Metadata = {
  title: "DayBound — Calm, practical trip planning",
  description: "Plan thoughtful itineraries, keep trip essentials together, and move through every day with confidence.",
};

const features = [
  ["Plan around real life", "Shape a trip around your dates, pace, budget, travel style, and the people coming with you."],
  ["Keep the day in view", "See timing, neighborhoods, walking, transit, costs, reservations, and flexible backup plans in one calm itinerary."],
  ["Travel ready, even offline", "Save typed reservations, packing lists, tasks, and trip essentials on your device without needing an account."],
];

export default function DayBoundPage() {
  return (
    <div className="daybound-page">
      <SiteHeader active="daybound" />
      <main>
        <section className="hero shell daybound-hero">
          <div className="hero-copy reveal">
            <div className="product-kicker"><img src={sitePath("/daybound-icon.png")} alt="" width={44} height={44} /><span>A Stride Software product</span></div>
            <p className="eyebrow">Your whole trip. One clear view.</p>
            <h1>Plan the trip.<br /><em>Enjoy the day.</em></h1>
            <p className="hero-lede">DayBound is a calm travel hub for turning ideas into practical itineraries—and keeping the details close when it’s time to go.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#flow">See how it works <Icon name="arrow-down" /></a>
              <Link className="text-link" href={sitePath("/")}>Talk to us <Icon name="arrow-up-right" /></Link>
            </div>
            <div className="trust-row" aria-label="Product highlights"><span>Native for iPhone & iPad</span><span>Guest mode included</span><span>Privacy-minded</span></div>
          </div>
          <div className="hero-visual reveal delay-1"><AppScreenshot product="daybound" /></div>
        </section>

        <section className="statement-band">
          <div className="shell statement-grid">
            <p className="eyebrow light">Why DayBound</p>
            <h2>Thoughtful structure,<br />without over-planning.</h2>
            <p>Trips change. Energy shifts. Weather happens. DayBound keeps the useful details organized while leaving enough room for the day to still feel like yours.</p>
          </div>
        </section>

        <section className="shell feature-section" id="flow">
          <div className="section-heading">
            <p className="eyebrow">From idea to itinerary</p>
            <h2>A better flow for the<br /><em>whole journey.</em></h2>
          </div>
          <div className="flow-grid">
            <article className="flow-card flow-card-wide">
              <div className="flow-copy"><span className="step">01</span><h3>Tell DayBound what matters.</h3><p>Choose Barcelona, two travelers, a balanced pace, and a food-focused trip. DayBound turns preferences into a grounded plan.</p></div>
              <DayBoundPreview variant="plan" compact />
            </article>
            <article className="flow-card">
              <div className="flow-copy"><span className="step">02</span><h3>See the day take shape.</h3><p>Stops are grouped by neighborhood, with realistic transit, walking, and costs.</p></div>
              <DayBoundPreview variant="itinerary" compact />
            </article>
            <article className="flow-card">
              <div className="flow-copy"><span className="step">03</span><h3>Stay ready for what changes.</h3><p>Open Today for the next activity, useful context, and low-energy or rainy-day backups.</p></div>
              <DayBoundPreview variant="today" compact />
            </article>
          </div>
        </section>

        <section className="shell feature-list">
          {features.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </section>

        <section className="next-product shell">
          <div><p className="eyebrow">Also from Stride Software</p><h2>Meet StrengthPlan.</h2><p>A focused training companion for planning workouts, tracking sessions, and seeing progress add up.</p><Link className="button button-purple" href={sitePath("/strengthplan")}>Explore StrengthPlan <Icon name="arrow-right" /></Link></div>
          <img className="next-icon" src={sitePath("/strengthplan-icon.png")} alt="StrengthPlan app icon" width={220} height={220} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
