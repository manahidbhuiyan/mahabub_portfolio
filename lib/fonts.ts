import { Geist, Geist_Mono, Sora } from "next/font/google";

/**
 * Display — Sora for brand / heading moments
 * Body — Geist for UI and long-form readability
 * Mono — Geist Mono for code / technical accents
 */
export const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
