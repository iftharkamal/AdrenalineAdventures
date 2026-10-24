import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import { SITE_URL } from "@/lib/site";

// Single weight per family: hierarchy comes from size and tracking
const formula1 = localFont({
  src: "../public/Formula1-Regular-1.ttf",
  variable: "--font-formula1",
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adrenaline Adventures",
  description: "Cinematic, full-screen adventure experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${formula1.variable} ${poppins.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
