import type { Metadata } from "next";
import StrengthPlanView from "../strengthplan-view";

export const metadata: Metadata = {
  title: "StrengthPlan — Plan. Train. Progress.",
  description: "Flexible workout planning, live session tracking, and useful progress history for iPhone and Apple Watch.",
};

export default function StrengthPlanPage() {
  return <StrengthPlanView />;
}
