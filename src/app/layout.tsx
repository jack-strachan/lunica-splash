import type { Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/navbar";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#F5F2EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${GeistMono.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
