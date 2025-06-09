import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Web Developer",
  description: "Personal portfolio showcasing my projects and skills as a web developer",
  keywords: ["portfolio", "web developer", "Next.js", "React", "TypeScript"],
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "My Portfolio | Web Developer",
    description: "Personal portfolio showcasing my projects and skills as a web developer",
    siteName: "My Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
