import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
  description: siteContent.hero.description,
  metadataBase: new URL("https://rootsofkerala.example"),
  openGraph: {
    title: `${siteContent.brand.name} | ${siteContent.brand.tagline}`,
    description: siteContent.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${instrumentSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg text-text font-sans">
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[100] rounded-full bg-coconut px-4 py-2 text-sm font-medium text-bg focus:not-sr-only"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
