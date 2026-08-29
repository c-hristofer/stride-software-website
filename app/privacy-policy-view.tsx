import Link from "next/link";
import { SiteFooter, SiteHeader, siteRoute } from "./site-chrome";

type PolicySection = {
  title: string;
  paragraphs: string[];
};

const policies: Record<"strengthplan" | "daybound", {
  product: string;
  updated: string;
  introduction: string;
  sections: PolicySection[];
}> = {
  strengthplan: {
    product: "StrengthPlan",
    updated: "Last updated August 27, 2026",
    introduction: "This policy describes the information StrengthPlan collects, why it is used, where it is stored, and the choices available to users.",
    sections: [
      {
        title: "Information collected",
        paragraphs: [
          "Account information: the name and email address you choose to provide, linked sign-in methods, and unique account identifier used to authenticate and separate your data from other users’ data. Sign in with Apple lets you share an Apple private-relay address instead of your personal email address.",
          "Workout information: workout-library entries, workout plans, sets, repetitions, entered weights, completion status, cardio plans and result summaries, interval segments, timers, notes, settings, and workout history that you choose to enter.",
          "Apple Health is optional. With permission, StrengthPlan can read workout measurements you choose to share and save strength, interval, and cardio workouts tracked through HealthKit-compatible devices and sensors. Raw HealthKit samples, heart-rate series, device identifiers, and route coordinates remain in Apple Health and are not uploaded to Firebase.",
          "Coach requests include the planning preferences, available equipment, schedule choices, and exercise names required to generate a plan. StrengthPlan does not send raw HealthKit samples, routes, account credentials, or unrelated profile data to Coach.",
          "Technical information: Firebase, Google, and Apple may process limited device, network, authentication, security, crash, and service-operation information as necessary to provide their platforms. StrengthPlan does not use this information for behavioral advertising or cross-app tracking.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Information is used to authenticate your account, save and synchronize workouts, restore your information across sessions, calculate workout progress and maximum weights, provide timers and cues, prevent abuse, troubleshoot failures, and maintain service security.",
          "StrengthPlan data is not sold. It is not used for targeted advertising, data-broker activity, credit, employment, insurance underwriting, or unrelated profiling.",
        ],
      },
      {
        title: "Service providers",
        paragraphs: [
          "StrengthPlan uses Google Firebase, including Firebase Authentication and Cloud Firestore, to authenticate users and store synchronized app data. Google processes information as a service provider under its applicable terms and privacy commitments.",
          "Coach sends the minimum planning prompt to an authenticated, App Check-protected Firebase callable service. The service confirms StrengthPlan+ access, applies a per-account quota, and contacts Google’s generative-model service using a server-side credential. StrengthPlan validates the returned plan on your device, and only a plan you accept is saved to your StrengthPlan account. Provider credentials are not included in the app.",
          "Apple processes information associated with App Store distribution, device services, operating-system features, crash reporting when enabled by the user, and other Apple platform functions. These providers may process data in countries other than the user’s country.",
        ],
      },
      {
        title: "Storage, security, and retention",
        paragraphs: [
          "Reasonable administrative and technical safeguards are used, including authenticated access and encrypted network transport. No storage or transmission system can be guaranteed completely secure.",
          "StrengthPlan information is retained while the account remains active and as reasonably necessary to provide the service, resolve disputes, prevent fraud, comply with law, and maintain limited operational backups. Archiving an individual workout activity removes it and its related active data from the app’s primary records.",
          "If a security incident affects information for which notice is legally required, affected users and regulators will be notified as required by applicable law.",
        ],
      },
      {
        title: "Choices and rights",
        paragraphs: [
          "You may review and change most workout data directly in the app and archive individual workout activities through the Workout Library. You may stop future collection by discontinuing use of the app.",
          "Depending on where you live, you may have rights to request access, correction, deletion, portability, restriction, or objection regarding personal information. Requests may require identity verification and may be limited where retention is legally permitted or required.",
          "Disconnecting Apple Health stops future access but does not delete workouts already saved in Apple Health. Deleting your StrengthPlan account does not silently delete Apple Health workouts or unrelated Health data.",
          "You may permanently delete your account by opening Account Details, selecting Account Settings, and choosing Delete Account. The app confirms your identity using Sign in with Apple, Google Sign-In, or your password, according to the method linked to the account. The trusted deletion service removes associated Firebase records and deletes the Firebase Authentication account last. Other privacy requests may be sent to info@stride-software.info.",
        ],
      },
      {
        title: "Children",
        paragraphs: [
          "StrengthPlan is not directed to children under 13, or the higher minimum age required for independent consent in the user’s jurisdiction. The operator does not knowingly collect personal information from children who cannot legally consent. A parent or guardian who believes a child provided information should contact support.",
        ],
      },
      {
        title: "Policy changes",
        paragraphs: [
          "This policy may be updated as the app, service providers, or legal requirements change. Material changes will be communicated through the app, App Store listing, or another reasonable method. Continued use after an effective update constitutes acknowledgment of the revised policy where permitted by law.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Questions, privacy requests, account-deletion assistance, complaints, and technical or safety concerns may be sent to info@stride-software.info. Do not include passwords, authentication codes, raw Health data, exact routes, or other unnecessary sensitive information.",
        ],
      },
    ],
  },
  daybound: {
    product: "DayBound",
    updated: "Effective August 24, 2026 · Policy version 2026-08-24",
    introduction: "This policy explains what DayBound processes, why it is needed, when it leaves your device, and the controls available to you.",
    sections: [
      {
        title: "Who operates DayBound",
        paragraphs: [
          "DayBound is operated by Stride Software LLC (\"DayBound,\" \"we,\" \"us,\" or \"our\"). This policy applies to the DayBound iPhone and iPad app, its TestFlight builds, and the supporting services used by the app.",
          "Stride Software LLC is responsible for deciding how personal data is processed for DayBound, except where a third-party provider acts independently under its own terms.",
        ],
      },
      {
        title: "Information you choose to provide",
        paragraphs: [
          "You may provide an account name and email address; traveler defaults; destinations and dates; budget, dietary, accessibility, lodging, and transportation preferences; itineraries; reservations and confirmation codes; tasks; packing items; expenses; decisions; comments; and other trip notes.",
          "DayBound does not ask for or process payment-card credentials. Cost, payment-status, refund, and shared-expense fields are organizational records you enter; payments and bookings are completed with the named provider.",
          "Dietary and accessibility information may reveal sensitive information. Provide it only when it is needed for your trip and you have permission to enter it for another traveler; DayBound uses it only for requested app functionality.",
        ],
      },
      {
        title: "Guest mode and on-device processing",
        paragraphs: [
          "Guest trips, drafts, operational travel records, and traveler defaults are stored on your device. They are not uploaded to a DayBound account unless you sign in and explicitly choose to back them up.",
          "Text extraction from selected PDFs and images happens on your device. DayBound creates a reviewable structured draft, redacts payment-number-like sequences, and does not retain the selected file or raw extracted text after the import screen is closed.",
        ],
      },
      {
        title: "Information processed automatically",
        paragraphs: [
          "The app and service may process a random installation identifier, Firebase account identifier, request and correlation identifiers, timestamps, capability checks, rate-limit events, request timing, and bounded error categories needed to authenticate users, keep requests reliable, prevent abuse, and diagnose service failures.",
          "DayBound does not use advertising trackers or include advertising or crash-reporting SDKs. The bundled Google Sign-In SDK declares limited authentication and service-analytics processing, including profile/contact, coarse-location, device, usage, and other service data under Google's terms. DayBound does not use that data for advertising or tracking. It does not collect continuous location history. Map and place searches occur only when you request them.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "We use information to provide planning, storage, synchronization, collaboration, sharing, reservation organization, reminders, live destination details, support, security, fraud prevention, and legal compliance. We do not sell personal information or use it for cross-app advertising.",
          "When you request an AI itinerary or focused change, DayBound sends the trip details needed to produce it—such as destination, dates, party type, pace, budget, dietary needs, and accessibility needs—to Google's Gemini service. Names, email addresses, loyalty identifiers, confirmation codes, and saved-traveler identities are excluded from itinerary-generation prompts.",
        ],
      },
      {
        title: "Services that may receive data",
        paragraphs: [
          "Depending on the features you use, data may be processed by Apple (Sign in with Apple, MapKit, WeatherKit, notifications, calendar, photos, and system sharing), Google and Firebase (authentication, Google sign-in, cloud storage, and Gemini itinerary generation), and Open-Meteo or the U.S. National Weather Service (destination weather).",
          "If licensed travel search is enabled, the named flight, lodging, car, or activity provider receives only the search and redirect details needed for your request. DayBound does not send that provider your DayBound password or collect card details. Each provider's own terms and privacy policy govern its checkout and services.",
        ],
      },
      {
        title: "Sharing and collaboration",
        paragraphs: [
          "People you invite can see and, depending on their role, edit the shared trip data you make available. Public read-only links are expiring and revocable. Their output removes confirmation codes, traveler and contact details, financial data, private notes, management links, attachments, and internal history.",
          "Do not place secrets, payment credentials, passport numbers, or information about another person in a shared field unless you have their permission and sharing is necessary for the trip.",
        ],
      },
      {
        title: "Your choices and rights",
        paragraphs: [
          "You can edit traveler defaults, delete trips, revoke share links, leave shared trips, and delete your account and on-device data from Profile. Guest users can delete all on-device DayBound data from Profile. You may also decline optional calendar, notification, photo, and Apple service permissions in system settings.",
          "Depending on where you live, you may have rights to access, correct, export, restrict, object to, or delete personal data, and to appeal or complain to a data-protection authority. Use the in-app Support section to make a privacy request. We may verify your identity before acting on an account request.",
        ],
      },
      {
        title: "Children and international processing",
        paragraphs: [
          "DayBound is not directed to children under 13, and we do not knowingly create accounts for them. A parent or guardian should contact support if they believe a child provided personal information.",
          "Service providers may process data in the United States and other countries. Where required, we use contractual and technical safeguards for international transfers while preserving rights that cannot be waived under local law.",
        ],
      },
      {
        title: "Changes and contact",
        paragraphs: [
          "We will update the policy version and effective date when this policy materially changes. When required, DayBound will provide an in-app notice or request renewed agreement before the change applies.",
          "Privacy questions and requests can be started from the in-app Support section. Please do not include passwords, authentication tokens, full payment-card numbers, or passport images in a support request.",
        ],
      },
    ],
  },
};

export default function PrivacyPolicyView({ product }: { product: "strengthplan" | "daybound" }) {
  const policy = policies[product];
  const isStrengthPlan = product === "strengthplan";

  return (
    <div className={isStrengthPlan ? "strength-page policy-page strength-policy" : "policy-page daybound-policy"}>
      <SiteHeader active={product} />
      <main className="shell policy-shell">
        <Link className="policy-back" href={siteRoute(`/${product}`)}>← Back to {policy.product}</Link>
        <header className="policy-header">
          <p className={isStrengthPlan ? "eyebrow purple" : "eyebrow"}>{policy.product}</p>
          <h1>Privacy Policy</h1>
          <p className="policy-date">{policy.updated}</p>
          <p className="policy-introduction">{policy.introduction}</p>
        </header>
        <article className="policy-document">
          {policy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
