import type { Metadata } from "next";
import SinglePageSite from "./single-page-site";

export const metadata: Metadata = {
  title: "Contact Stride Software",
  description: "Get in touch with Stride Software LLC about DayBound, StrengthPlan, support, or partnerships.",
};

export default function HomePage() {
  return <SinglePageSite />;
}
