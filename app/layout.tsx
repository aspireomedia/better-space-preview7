import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "./home-market.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Better Space | Furniture for a Better Living",
  description: "Furniture modern untuk setiap ruang.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
