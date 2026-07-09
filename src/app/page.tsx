import HomePageClient from "@/components/HomePageClient";
import {
  getFeaturedProjectsData,
  getSiteMetaData,
} from "@/sanity/fetchers";

export default async function Home() {
  const [siteMeta, featuredProjects] = await Promise.all([
    getSiteMetaData(),
    getFeaturedProjectsData(),
  ]);

  return (
    <HomePageClient siteMeta={siteMeta} featuredProjects={featuredProjects} />
  );
}
