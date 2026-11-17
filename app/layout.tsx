import type { Metadata } from "next";
import "./globals.css";
import { VT323 } from "next/font/google";

const font = VT323({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Brigi+Johnny",
  description: "magic",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}