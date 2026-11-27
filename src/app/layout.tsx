import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "FORMORA® | Independent Creative & Digital Experience Studio",
  description:
    "An independent creative studio shaping brands, building digital experiences and turning ambitious ideas into meaningful interactions.",
  keywords: [
    "Design Agency",
    "Creative Studio",
    "UI/UX Design",
    "Next.js Development",
    "Brand Identity",
    "Digital Experiences",
    "Weboin Internship",
  ],
  authors: [{ name: "Suryanarayanan & FORMORA Studio" }],
  openGraph: {
    title: "FORMORA® | Digital Experiences, Designed to Matter",
    description:
      "Independent creative & digital experience studio crafting digital flagships for ambitious brands worldwide.",
    siteName: "FORMORA®",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMORA® | Independent Creative Studio",
    description: "Digital Experiences, Designed to Matter.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load Manrope (modern editorial sans) and Instrument Serif (luxury editorial serif) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          {/* Top Real-time Scroll Progress Indicator */}
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
