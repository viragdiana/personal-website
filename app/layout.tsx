import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Hedvig_Letters_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";

const departure = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-fraunces",
});

const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hedvig",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diana",
  description: "magic_portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${departure.variable} ${fraunces.variable} ${hedvig.variable} ${inter.variable}`}>
      <body >{children}</body>
    </html>
  );
}