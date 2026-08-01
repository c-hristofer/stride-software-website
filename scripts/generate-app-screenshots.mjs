import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const esc = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const t = (x, y, value, size, fill, weight = 400, anchor = "start", letterSpacing = 0) =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial, Helvetica, sans-serif" font-size="${size}px" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${letterSpacing}px">${esc(value)}</text>`;
const r = (x, y, width, height, fill, radius = 0, stroke = "none", strokeWidth = 0) =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
const line = (x1, y1, x2, y2, stroke, width = 1, dash = "") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;

function dayboundSvg() {
  const navy = "#14242c";
  const orange = "#db5e30";
  const muted = "#7c8688";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="2160" viewBox="0 0 1080 2160">
    <defs>
      <linearGradient id="dayboundTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#18343d"/><stop offset="1" stop-color="#0e2028"/></linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#14242c" flood-opacity=".16"/></filter>
    </defs>
    ${r(0, 0, 1080, 2160, "#fbf8f1")}
    ${t(82, 76, "9:41", 28, navy, 700)}${t(998, 76, "●   ◔   ▰", 22, navy, 700, "end")}
    ${line(64, 118, 1016, 118, "#e3ded3", 2)}
    ${r(64, 152, 62, 62, "#f4e4d3", 18)}
    <circle cx="95" cy="183" r="21" fill="none" stroke="${orange}" stroke-width="5"/><path d="M95 157 L102 180 L126 183 L102 187 L95 210 L88 187 L64 183 L88 180 Z" fill="${orange}"/>
    ${t(150, 178, "DayBound", 31, navy, 700)}${t(150, 207, "YOUR TRIP, IN RHYTHM", 15, muted, 700, "start", 2)}
    ${t(1016, 186, "•••", 28, navy, 700, "end")}
    ${r(64, 250, 952, 388, "url(#dayboundTop)", 34)}
    ${t(104, 309, "TUESDAY, SEP 14", 18, "#b9cbce", 700, "start", 3)}
    ${t(104, 374, "Good morning.", 54, "#ffffff", 700)}
    ${t(104, 421, "Here’s your Barcelona day.", 25, "#c6d0d2", 400)}
    ${t(104, 536, "DAY 1 OF 2", 17, "#b9cbce", 700, "start", 3)}
    ${t(976, 536, "Barcelona", 24, "#ffffff", 700, "end")}
    ${r(64, 584, 952, 298, "#ffffff", 32, "#e7e0d5", 2)}
    ${t(104, 642, "NEXT · 10:00 AM", 17, orange, 700, "start", 2)}
    ${t(104, 696, "Gothic Quarter walk", 31, navy, 700)}
    ${t(104, 736, "Plaça Nova · 12 min away", 21, muted, 400)}
    ${r(886, 662, 78, 78, orange, 39)}${t(925, 715, "↗", 35, "#ffffff", 700, "middle")}
    ${t(104, 816, "TODAY", 18, navy, 700)}${t(976, 816, "1 OF 3", 18, muted, 700, "end")}
    ${r(104, 840, 872, 9, "#e5e0d7", 5)}${r(104, 840, 298, 9, orange, 5)}
    ${t(64, 978, "YOUR ITINERARY", 18, orange, 700, "start", 3)}
    ${t(64, 1038, "A gentle start in the old city", 35, navy, 700)}
    ${t(64, 1076, "Balanced pace · Food-focused", 20, muted, 400)}
    ${line(64, 1124, 1016, 1124, "#e3ded3", 2)}
    ${t(76, 1190, "8:30", 18, muted, 700)}${r(143, 1166, 38, 38, "#d9e7df", 19)}${t(162, 1192, "✓", 23, "#367452", 700, "middle")}${t(211, 1184, "Breakfast near Eixample", 24, navy, 700)}${t(211, 1216, "Done · 45 min", 18, muted, 400)}
    ${line(64, 1262, 1016, 1262, "#e3ded3", 2)}
    ${t(76, 1328, "10:00", 18, muted, 700)}${r(143, 1304, 38, 38, orange, 19)}${t(162, 1330, "2", 19, "#ffffff", 700, "middle")}${t(211, 1322, "Gothic Quarter walk", 24, navy, 700)}${t(211, 1354, "Plaça Nova · 90 min", 18, muted, 400)}
    ${line(64, 1400, 1016, 1400, "#e3ded3", 2)}
    ${t(76, 1466, "1:00", 18, muted, 700)}${r(143, 1442, 38, 38, "#e8eef0", 19)}${t(162, 1468, "3", 19, "#1d617e", 700, "middle")}${t(211, 1460, "Tapas lunch in El Born", 24, navy, 700)}${t(211, 1492, "El Born · $32", 18, muted, 400)}
    ${r(64, 1570, 952, 178, "#f5e9db", 26)}${t(104, 1628, "LOW-ENERGY OPTION", 16, "#a84925", 700, "start", 2)}${t(104, 1678, "Take a taxi to lunch and keep the timed visit.", 21, navy, 400)}
    ${line(64, 1800, 1016, 1800, "#e3ded3", 2)}
    ${t(182, 1880, "Trips", 16, muted, 700, "middle")}${t(404, 1880, "＋", 28, muted, 400, "middle")}${t(626, 1880, "☀", 27, orange, 700, "middle")}${t(848, 1880, "○", 25, muted, 400, "middle")}
    ${t(182, 1914, "Trips", 14, muted, 400, "middle")}${t(404, 1914, "Plan", 14, muted, 400, "middle")}${t(626, 1914, "Today", 14, orange, 700, "middle")}${t(848, 1914, "Profile", 14, muted, 400, "middle")}
    ${line(64, 1978, 1016, 1978, "#e3ded3", 2)}
    ${t(540, 2040, "DAYBOUND", 15, orange, 700, "middle", 4)}
  </svg>`;
}

function strengthplanSvg() {
  const purple = "#9a6cff";
  const text = "#ffffff";
  const muted = "#8e90a7";
  const card = "#181a38";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="2160" viewBox="0 0 1080 2160">
    <defs>
      <linearGradient id="strengthGlow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#241754"/><stop offset="1" stop-color="#0d0e26"/></linearGradient>
    </defs>
    ${r(0, 0, 1080, 2160, "#0d0e26")}
    ${r(0, 0, 1080, 350, "url(#strengthGlow)")}
    ${t(82, 76, "9:41", 28, text, 700)}${t(998, 76, "●   ◔   ▰", 22, text, 700, "end")}
    ${line(64, 118, 1016, 118, "#2b2d4a", 2)}
    ${t(64, 190, "StrengthPlan", 35, text, 700)}${t(1016, 191, "◉", 28, purple, 700, "end")}
    ${t(64, 262, "SESSION", 17, "#b99cff", 700, "start", 3)}${t(1016, 262, "MONDAY, SEP 14", 17, muted, 700, "end", 2)}
    ${["M", "T", "W", "T", "F", "S", "S"].map((day, index) => { const x = 80 + index * 140; const active = index === 0; return `${r(x, 318, 106, 86, active ? purple : "#171936", 23)}${t(x + 53, 350, day, 16, active ? text : muted, 700, "middle")}${t(x + 53, 386, String(14 + index), 27, active ? text : muted, 700, "middle")}`; }).join("")}
    ${t(64, 505, "LOWER STRENGTH", 18, "#b99cff", 700, "start", 3)}
    ${t(64, 565, "Your focus for today", 41, text, 700)}
    ${t(64, 605, "4 activities · 45 min", 22, muted, 400)}
    ${r(64, 654, 952, 10, "#292b47", 5)}${r(64, 654, 330, 10, purple, 5)}${t(1016, 704, "34%", 17, muted, 700, "end")}
    ${r(64, 750, 952, 306, card, 30, "#292c4d", 2)}
    ${t(100, 808, "1 / 4", 17, purple, 700, "start", 2)}${t(100, 866, "Back Squat", 32, text, 700)}${t(100, 902, "4 sets × 5 reps", 20, muted, 400)}${t(980, 850, "⌃", 32, muted, 400, "end")}
    ${r(100, 942, 430, 72, "#0e0f26", 16)}${t(130, 986, "1", 18, muted, 700)}${t(270, 986, "185", 27, text, 700)}${t(380, 985, "LBS", 14, muted, 700)}${t(500, 985, "5 reps", 14, muted, 400, "end")}
    ${r(554, 942, 430, 72, "#0e0f26", 16)}${t(584, 986, "2", 18, muted, 700)}${t(724, 986, "185", 27, text, 700)}${t(834, 985, "LBS", 14, muted, 700)}${t(954, 985, "5 reps", 14, muted, 400, "end")}
    ${r(64, 1080, 952, 124, card, 30, "#292c4d", 2)}${t(100, 1141, "2 / 4", 17, purple, 700, "start", 2)}${t(100, 1180, "Bench Press", 27, text, 700)}${t(100, 1210, "3 sets × 8–10 reps", 18, muted, 400)}${t(980, 1157, "⌄", 32, muted, 400, "end")}
    ${t(64, 1304, "UP NEXT", 17, "#b99cff", 700, "start", 3)}
    ${r(64, 1352, 952, 146, "#171936", 28)}${t(100, 1410, "3 / 4", 16, purple, 700, "start", 2)}${t(100, 1453, "Romanian Deadlift", 25, text, 700)}${t(100, 1482, "3 sets × 8 reps", 18, muted, 400)}${t(980, 1434, "→", 30, purple, 700, "end")}
    ${r(64, 1584, 952, 178, "#241754", 28, "#5f3bb5", 2)}${t(104, 1640, "STRENGTHPLAN COACH", 16, "#c5afff", 700, "start", 2)}${t(104, 1690, "Keep the next set simple.", 26, text, 700)}${t(104, 1727, "Rest 2:00, then repeat your last clean rep.", 18, "#c7b2ff", 400)}
    ${line(64, 1812, 1016, 1812, "#2b2d4a", 2)}
    ${t(182, 1893, "↟", 29, purple, 700, "middle")}${t(404, 1893, "▤", 25, muted, 400, "middle")}${t(626, 1893, "⌁", 27, muted, 400, "middle")}${t(848, 1893, "✦", 25, muted, 400, "middle")}
    ${t(182, 1928, "Session", 14, purple, 700, "middle")}${t(404, 1928, "Planner", 14, muted, 400, "middle")}${t(626, 1928, "Track", 14, muted, 400, "middle")}${t(848, 1928, "Coach", 14, muted, 400, "middle")}
    ${line(64, 1992, 1016, 1992, "#2b2d4a", 2)}
    ${t(540, 2054, "STRENGTHPLAN", 15, purple, 700, "middle", 4)}
  </svg>`;
}

await sharp(Buffer.from(dayboundSvg())).png().toFile(path.join(publicDir, "daybound-screen.png"));
await sharp(Buffer.from(strengthplanSvg())).png().toFile(path.join(publicDir, "strengthplan-screen.png"));

