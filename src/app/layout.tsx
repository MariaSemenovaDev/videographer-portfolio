import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import Menu from "@/components/Menu";
import SmoothScroll from "@/components/ScrollSmoother";
import {
  getFeaturedProjectsData,
  getFooterLinksData,
  getNavigationLinksData,
  getSiteMetaData,
} from "@/sanity/fetchers";

export const metadata: Metadata = {
  title: "Films That Stay — Videographer Portfolio",
  description:
    "Editorial videographer portfolio with selected films, documentary stories, cinematic visuals, services, and contact details.",
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteMeta, footerLinks, navigationLinks, featuredProjects] =
    await Promise.all([
      getSiteMetaData(),
      getFooterLinksData(),
      getNavigationLinksData(),
      getFeaturedProjectsData(),
    ]);

  return (
    <html lang="ru">
      <body className="antialiased" suppressHydrationWarning>
        <Menu
          footerLinks={footerLinks}
          navigationLinks={navigationLinks}
          siteMeta={siteMeta}
        />
        <SmoothScroll>
          <div className="mt-[10vh] pb-[10vh]">
            {children}
          </div>
          <Footer
            featuredProjects={featuredProjects}
            footerLinks={footerLinks}
            navigationLinks={navigationLinks}
            siteMeta={siteMeta}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
