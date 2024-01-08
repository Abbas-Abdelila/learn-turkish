import "../styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ProvideTheme from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme : 'light' }}>
      <body className={inter.className}>
        <ProvideTheme>
          <header className="flex flex-col w-[95%] mx-auto">
          <Navbar />
          </header>
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ProvideTheme>
      </body>
    </html>
  );
}
