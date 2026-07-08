import type { Metadata } from "next";

import { SiteNavigation } from "@/components/navigation/site-navigation";

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
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
