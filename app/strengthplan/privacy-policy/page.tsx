import type { Metadata } from "next";
import PrivacyPolicyView from "../../privacy-policy-view";

export const metadata: Metadata = {
  title: "StrengthPlan Privacy Policy",
  description: "How StrengthPlan collects, uses, stores, and protects information.",
};

export default function StrengthPlanPrivacyPolicyPage() {
  return <PrivacyPolicyView product="strengthplan" />;
}
