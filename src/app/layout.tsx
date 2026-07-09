import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import Menu from "@/components/Menu";
import SmoothScroll from "@/components/ScrollSmoother";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: siteMeta.name,
  description: siteMeta.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased" suppressHydrationWarning>
        <Menu />
        <SmoothScroll>
          <div className="mt-[10vh] pb-[10vh]">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
