import type { Metadata } from "next";
import { Raleway, Fraunces, Inter, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SideTabSwitcher } from "@/components/shell/SideTabSwitcher";
import { ConceptBadge } from "@/components/shell/ConceptBadge";

/**
 * Fonts used across the 3 concepts. Each is exposed as a CSS variable so the
 * concept body classes in globals.css can pick the right pairing without an
 * extra layout per concept. All fonts are Google Fonts → Divi-picker compatible.
 */
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud Title — Concept Preview",
  description:
    "Homepage direction concepts for Cloud Title LLC. Concept preview only — final build in WordPress + Divi.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${fraunces.variable} ${inter.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-to-content">Skip to content</a>
        <ConceptBadge />
        <SideTabSwitcher />
        {children}
      </body>
    </html>
  );
}
