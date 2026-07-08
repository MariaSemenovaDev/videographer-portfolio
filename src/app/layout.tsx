import { SiteNavigation } from "@/components/navigation/site-navigation";

import "./globals.css";

export const metadata = {
    title: "Videographer Portfolio",
    description:
        "Editorial portfolio website for a videographer, featuring selected films, cinematic case studies, services, and contact information."
}

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
