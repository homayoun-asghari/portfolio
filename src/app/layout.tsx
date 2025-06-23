import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "../i18n/i18n"; // 👈 load i18n config

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
