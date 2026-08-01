import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], style: ["normal", "italic"] });

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://c-hristofer.github.io/stride-software-website";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Stride Software LLC", template: "%s | Stride Software" },
  description: "Stride Software LLC creates focused, thoughtful apps including DayBound and StrengthPlan.",
  icons: { icon: `${siteUrl}/favicon.png`, shortcut: `${siteUrl}/favicon.png` },
  openGraph: {
    title: "Stride Software LLC",
    description: "Small software. Meaningful momentum. Meet DayBound and StrengthPlan.",
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Stride Software — DayBound and StrengthPlan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride Software LLC",
    description: "Small software. Meaningful momentum. Meet DayBound and StrengthPlan.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
