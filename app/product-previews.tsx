import { sitePath } from "./site-chrome";

const Status = () => <div className="phone-status"><span>9:41</span><span>● ◔ ▰</span></div>;
const Tabs = ({ active, strength = false }: { active: string; strength?: boolean }) => (
  <div className="app-tabs">{(strength ? ["Session", "Planner", "Track", "Coach"] : ["Trips", "Plan", "Today", "Profile"]).map((tab) => <span className={active === tab ? "selected" : ""} key={tab}><b>{tab === "Trips" ? "⌁" : tab === "Plan" ? "＋" : tab === "Today" ? "☀" : tab === "Profile" ? "○" : tab === "Session" ? "↟" : tab === "Planner" ? "▤" : tab === "Track" ? "⌁" : "✦"}</b>{tab}</span>)}</div>
);

export function AppScreenshot({ product }: { product: "daybound" | "strengthplan" }) {
  const isDayBound = product === "daybound";
  return (
    <figure className={`app-screenshot ${isDayBound ? "daybound-shot" : "strength-shot"}`}>
      <div className="screenshot-frame">
        <img
          src={sitePath(isDayBound ? "/daybound-screen.png" : "/strengthplan-screen.png")}
          alt={isDayBound ? "DayBound app screen showing a Barcelona day itinerary" : "StrengthPlan app screen showing a lower strength workout"}
          width={1080}
          height={2160}
        />
      </div>
      <figcaption>{isDayBound ? "DayBound · Today view" : "StrengthPlan · Session view"}</figcaption>
    </figure>
  );
}

export function DayBoundPreview({ variant, compact = false }: { variant: "plan" | "itinerary" | "today"; compact?: boolean }) {
  return (
    <div className={`device phone daybound-phone ${compact ? "compact" : ""}`} aria-label={`DayBound ${variant} app preview`}>
      <div className="device-screen">
        <Status />
        {variant === "plan" && <div className="app-screen plan-screen"><div className="app-title"><span>Plan</span><i>New trip</i></div><p className="screen-lede">Where would you like to go?</p><div className="input-row"><span>⌖</span><div><small>DESTINATION</small><strong>Barcelona, Spain</strong></div></div><div className="date-row"><div><small>START</small><strong>Sep 14</strong></div><span>→</span><div><small>END</small><strong>Sep 15</strong></div></div><p className="field-label">WHAT SOUNDS GOOD?</p><div className="chips"><span>Exploring</span><span>Food-focused</span><span>Culture</span></div><div className="traveler-row"><span>2 travelers</span><span>Balanced pace</span></div><button>Build my trip</button></div>}
        {variant === "itinerary" && <div className="app-screen itinerary-screen"><div className="app-title"><span>Barcelona</span><i>•••</i></div><p className="trip-meta">SEP 14–15 · 2 DAYS</p><div className="segmented"><span>Overview</span><span className="on">Itinerary</span><span>Details</span></div><div className="day-head"><div><small>DAY 1</small><strong>Old town orientation</strong></div><em>$86</em></div><div className="timeline"><div><time>10:00</time><span className="dot"></span><p><strong>Gothic Quarter walk</strong><small>Plaça Nova · 90 min</small></p></div><div><time>13:00</time><span className="dot meal"></span><p><strong>Tapas lunch in El Born</strong><small>El Born · $32</small></p></div><div><time>15:30</time><span className="dot"></span><p><strong>Sagrada Família</strong><small>Timed entry · $38</small></p></div></div><div className="day-note"><span>☂</span><p><strong>Rainy-day backup</strong><small>Covered market + museum route</small></p></div></div>}
        {variant === "today" && <div className="app-screen today-screen"><div className="today-top"><small>TUESDAY, SEP 14</small><h3>Good morning.</h3><p>Here’s your Barcelona day.</p></div><div className="next-card"><div><small>NEXT · 10:00 AM</small><strong>Gothic Quarter walk</strong><p>Plaça Nova · 12 min away</p></div><span>↗</span></div><div className="day-progress"><span>Today</span><strong>1 of 3</strong><i><b></b></i></div><div className="mini-timeline"><span className="done">✓</span><p><small>8:30 AM</small><strong>Breakfast near Eixample</strong></p></div><div className="mini-timeline"><span>2</span><p><small>1:00 PM</small><strong>Tapas lunch in El Born</strong></p></div><div className="tip-card"><span>Low-energy option</span><p>Take a taxi to lunch and keep the timed visit.</p></div></div>}
        <Tabs active={variant === "plan" ? "Plan" : variant === "today" ? "Today" : "Trips"} />
      </div>
    </div>
  );
}

export function StrengthPreview({ variant, compact = false }: { variant: "session" | "planner" | "track"; compact?: boolean }) {
  return (
    <div className={`device phone strength-phone ${compact ? "compact" : ""}`} aria-label={`StrengthPlan ${variant} app preview`}>
      <div className="device-screen dark-screen"><Status />
        {variant === "session" && <div className="app-screen strength-screen"><div className="app-title"><span>Session</span><i>◉</i></div><div className="week-strip">{["M","T","W","T","F","S","S"].map((d,i)=><span className={i===0?"on":""} key={i}><small>{d}</small><b>{4+i}</b></span>)}</div><div className="workout-head"><small>MONDAY</small><h3>Lower Strength</h3><p>4 activities · 45 min</p></div><div className="progress-line"><span style={{width:"34%"}} /></div><div className="exercise-card"><div><strong>Back Squat</strong><small>4 sets × 5</small></div><span>⌃</span><div className="sets"><span><b>1</b><i>185</i><small>LBS</small><em>5 reps</em></span><span><b>2</b><i>185</i><small>LBS</small><em>5 reps</em></span></div></div><div className="exercise-card collapsed"><div><strong>Bench Press</strong><small>3 sets × 8–10</small></div><span>⌄</span></div></div>}
        {variant === "planner" && <div className="app-screen strength-screen"><div className="app-title"><span>Planner</span><i>＋</i></div><p className="screen-lede purple">Build a week that fits.</p><div className="plan-week"><small>WEEK 1 OF 4</small>{[["MON","Lower Strength","4 activities"],["WED","Upper Strength","5 activities"],["SAT","Conditioning","Intervals · 24 min"]].map(([d,t,m])=><div key={d}><span>{d}</span><p><strong>{t}</strong><small>{m}</small></p><i>›</i></div>)}</div><div className="coach-card"><span>✦</span><p><strong>StrengthPlan Coach</strong><small>Turn your goals into a clear plan.</small></p><b>Build</b></div></div>}
        {variant === "track" && <div className="app-screen strength-screen"><div className="app-title"><span>Track Progress</span><i>◉</i></div><div className="range-tabs"><span>Week</span><span className="on">Month</span><span>Year</span></div><div className="metric-card"><small>TRAINING VOLUME</small><strong>18,420 <em>lb</em></strong><span>↗ 12% from last month</span><div className="chart"><i style={{height:"28%"}}></i><i style={{height:"44%"}}></i><i style={{height:"39%"}}></i><i style={{height:"66%"}}></i><i style={{height:"74%"}}></i><i style={{height:"92%"}}></i></div></div><div className="record-card"><span>PR</span><p><strong>Back Squat</strong><small>New maximum</small></p><b>205 lb</b></div><div className="record-card"><span>12</span><p><strong>Sessions completed</strong><small>July 2026</small></p><b>+3</b></div></div>}
        <Tabs strength active={variant === "session" ? "Session" : variant === "planner" ? "Planner" : "Track"} />
      </div>
    </div>
  );
}
