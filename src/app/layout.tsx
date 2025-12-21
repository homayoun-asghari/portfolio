import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DirectionProvider from "@/components/DirectionProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../i18n/i18n"; // 👈 load i18n config
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/700.css";

// Load Inter font for Latin characters
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homayoun Asghari | Portfolio",
  description:
    "Personal portfolio showcasing my projects and skills as a web developer",
  openGraph: {
    title: "Homayoun Asghari | Portfolio",
    description:
      "Personal portfolio of Homayoun Asghari, a Full Stack Web Developer",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <body
        className={`${inter.variable} font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <GoogleAnalytics />
        <DirectionProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
        </DirectionProvider>
      </body>
    </html>
  );
}
