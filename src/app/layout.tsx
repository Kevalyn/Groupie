import type { Metadata } from "next";
import "./globals.css";
import { ServiceWorker } from "@/components/ServiceWorker";
import { CsrfMeta } from "@/components/CsrfMeta";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Groupie",
  description: "Create and join trusted groups to share purchases or subscription slots.",
  applicationName: "Groupie",
  manifest: "/manifest.webmanifest",
  themeColor: "#f7f2ea",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Groupie"
  }
};

export const viewport = {
  themeColor: "#f7f2ea",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <CsrfMeta />
      </head>
      <body className={`gradient-bg ${spaceGrotesk.className}`}>
        <ServiceWorker />
        {children}
      </body>
    </html>
  );
}
