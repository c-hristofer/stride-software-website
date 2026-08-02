import type { Metadata } from "next";
import DayBoundView from "../daybound-view";

export const metadata: Metadata = {
  title: "DayBound — Calm, practical trip planning",
  description: "Plan thoughtful itineraries, keep trip essentials together, and move through every day with confidence.",
};

export default function DayBoundPage() {
  return <DayBoundView />;
}
