import type { Metadata } from "next";
import Link from "next/link";
import { StrengthPreview } from "../product-previews";
import { SiteFooter, SiteHeader, sitePath } from "../site-chrome";

export const metadata: Metadata = {
  title: "StrengthPlan — Plan. Train. Progress.",
  description: "Flexible workout planning, live session tracking, and useful progress history for iPhone and Apple Watch.",
};

export default function StrengthPlanPage() {
  return (
    <div className="strength-page">
      <SiteHeader active="strengthplan" />
      <main>
        <section className="hero shell strength-hero">
          <div className="hero-copy reveal">
            <div className="product-kicker"><img src={sitePath("/strengthplan-icon.png")} alt="" width={44} height={44} /><span>A Stride Software product</span></div>
            <p className="eyebrow purple">Plan. Train. Progress.</p>
            <h1>Your training,<br /><em>finally in rhythm.</em></h1>
            <p className="hero-lede">StrengthPlan brings flexible schedules, focused workout tracking, and meaningful progress into one native training companion.</p>
            <div className="hero-actions"><a className="button button-purple" href="#flow">Explore the flow <span aria-hidden="true">↓</span></a><Link className="text-link light-link" href={sitePath("/contact")}>Get in touch <span aria-hidden="true">↗</span></Link></div>
            <div className="trust-row dark-trust"><span>iPhone + Apple Watch</span><span>Apple Health optional</span><span>Works through interruptions</span></div>
          </div>
          <div className="hero-visual reveal delay-1"><StrengthPreview variant="session" /></div>
        </section>

        <section className="strength-statement"><div className="shell"><p className="eyebrow purple">Built for consistency</p><h2>Know what to do.<br /><em>See what you’ve done.</em></h2><div className="strength-statements"><p>Reusable strength, interval, cardio, and swimming sessions.</p><p>One-to-eight-week schedules that flex when your plans change.</p><p>Live tracking on iPhone with eligible sessions on Apple Watch.</p></div></div></section>

        <section className="shell strength-flow" id="flow">
          <div className="section-heading strength-heading"><p className="eyebrow purple">One connected system</p><h2>From the plan to<br /><em>the next personal best.</em></h2></div>
          <div className="strength-flow-row"><div className="flow-copy"><span className="step purple-step">01 / PLAN</span><h3>Build training around your week.</h3><p>Create reusable sessions, then place them into a flexible repeating schedule. Monday lower strength. Wednesday upper. Saturday conditioning. Clear, editable, yours.</p><ul><li>Strength, intervals, cardio, and swimming</li><li>One-time sessions when plans change</li><li>Coach-generated workout structures with StrengthPlan+</li></ul></div><StrengthPreview variant="planner" compact /></div>
          <div className="strength-flow-row reverse"><StrengthPreview variant="session" compact /><div className="flow-copy"><span className="step purple-step">02 / TRAIN</span><h3>Focus on the set in front of you.</h3><p>Log weights, reps, and results in a fast session view. Pause, resume, and finish from iPhone or a paired Apple Watch without creating duplicate workouts.</p><ul><li>Set-by-set strength logging</li><li>Interval phases and available live metrics</li><li>Active sessions preserved through interruptions</li></ul></div></div>
          <div className="strength-flow-row"><div className="flow-copy"><span className="step purple-step">03 / PROGRESS</span><h3>Make the work visible.</h3><p>Review completed sessions, exercise history, personal records, and training trends—useful feedback without turning your workout into a spreadsheet.</p><ul><li>Accessible progress summaries</li><li>Workout history and personal records</li><li>Optional Apple Health integration</li></ul></div><StrengthPreview variant="track" compact /></div>
        </section>

        <section className="watch-band"><div className="shell watch-grid"><div className="watch-mock"><div className="watch-crown"></div><div className="watch-screen"><small>LOWER STRENGTH</small><strong>Back Squat</strong><span>SET 2 OF 4</span><b>04:18</b><div><i>Pause</i><i>Finish</i></div></div></div><div><p className="eyebrow purple">On your wrist</p><h2>Start on iPhone.<br />Train on Apple Watch.</h2><p>Keep the current activity, elapsed time, workout phase, and controls available when your phone is not where your focus should be.</p></div></div></section>

        <section className="shell strength-cta"><img src={sitePath("/strengthplan-icon.png")} alt="StrengthPlan app icon" width={150} height={150}/><div><p className="eyebrow purple">StrengthPlan</p><h2>Build a plan you can keep.</h2><p>Native workout planning and tracking, designed to help effort turn into momentum.</p></div><Link className="button button-purple" href={sitePath("/contact")}>Ask about StrengthPlan <span aria-hidden="true">→</span></Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}
