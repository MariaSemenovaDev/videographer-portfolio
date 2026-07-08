import type { Metadata } from "next";

import { SiteNavigation } from "@/components/navigation/site-navigation";

import "./globals.css";

export const metadata: Metadata = {
  title: "Editorial GSAP Navigation",
  description:
    "Learning project with Next.js App Router, Tailwind, TypeScript, and GSAP navigation drawer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
