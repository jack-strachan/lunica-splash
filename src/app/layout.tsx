import type { Metadata, Viewport } from "next";
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} ${GeistMono.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
