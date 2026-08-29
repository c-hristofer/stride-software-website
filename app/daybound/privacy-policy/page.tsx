import type { Metadata } from "next";
import PrivacyPolicyView from "../../privacy-policy-view";

export const metadata: Metadata = {
  title: "DayBound Privacy Policy",
  description: "How DayBound processes information and the privacy controls available to users.",
};

export default function DayBoundPrivacyPolicyPage() {
  return <PrivacyPolicyView product="daybound" />;
}
