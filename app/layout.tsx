import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Encode_Sans_Expanded, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const encodeSansExpanded = Encode_Sans_Expanded({
  variable: "--font-encode-sans-expanded",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const formula1Regular = localFont({
  src: "../public/Formula1-Regular-1.ttf",
  variable: "--font-formula1",
  weight: "400",
  display: "swap",
});

const formula1Bold = localFont({
  src: "../public/Formula1-Bold-4.ttf",
  variable: "--font-formula1-bold",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrenaline Adventures",
  description: "Cinematic, full-screen adventure experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${encodeSansExpanded.variable} ${formula1Regular.variable} ${formula1Bold.variable} antialiased font-poppins`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
