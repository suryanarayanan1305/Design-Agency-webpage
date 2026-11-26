import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,600&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F2EFE8] text-[#121212] antialiased selection:bg-[#FF5733] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
