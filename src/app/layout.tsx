import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PageTransitionProvider } from "@/components/shared/PageTransitionShell";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Editorial Portfolio",
    template: "%s | Editorial Portfolio"
  },
  description:
    "Warm editorial portfolio interface with animated navigation, neutral placeholders, and room for future media assets.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="editorial-theme">
        <PageTransitionProvider>
          <SiteHeader />
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
