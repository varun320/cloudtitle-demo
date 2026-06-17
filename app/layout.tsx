import type { Metadata, Viewport } from "next";
import {
  Raleway,
  Fraunces,
  Inter,
  Geist,
  Geist_Mono,
  Bricolage_Grotesque,
} from "next/font/google";
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

/** Bricolage Grotesque — Premium concept's display face. A real display
 * grotesque (wider tracking variation, more character) vs. Inter's humanist
 * sans, so the Inter/Raleway humanist-on-humanist clash is resolved. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloud Title — Concept Preview",
  description:
    "Homepage direction concepts for Cloud Title LLC. Concept preview only — final build in WordPress + Divi.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/favicon.ico" },
};

/**
 * Required for mobile rendering — without this, mobile browsers render at
 * the default desktop width (~980px) then scale down, which made the
 * bottom-center chip strip appear off-screen or tiny.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${fraunces.variable} ${inter.variable} ${geist.variable} ${geistMono.variable} ${bricolage.variable}`}
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
