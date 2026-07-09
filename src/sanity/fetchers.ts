import {
  featuredProjects as fallbackFeaturedProjects,
  journalEntries as fallbackJournalEntries,
  navigationLinks as fallbackNavigationLinks,
  processSteps as fallbackProcessSteps,
  reportageRates as fallbackReportageRates,
  reportageServicesNote as fallbackReportageServicesNote,
  serviceExtras as fallbackServiceExtras,
  servicePackages as fallbackServicePackages,
  siteMeta as fallbackSiteMeta,
} from "@/content/site";
import { getSanityClient } from "@/sanity/client";
import { buildMuxPlaybackUrl, buildSanityImageUrl } from "@/sanity/image";
import {
  contactInfoQuery,
  filmsQuery,
  homePageQuery,
  notesQuery,
  processStepsQuery,
  servicesQuery,
  siteSettingsQuery,
} from "@/sanity/queries";
import type {
  ContactInfo,
  Film,
  HomePageContent,
  Note,
  ProcessStep,
  Service,
  SiteSettings,
} from "@/sanity/types";

type SiteMetaData = typeof fallbackSiteMeta;
type FeaturedProject = (typeof fallbackFeaturedProjects)[number];
type JournalEntry = (typeof fallbackJournalEntries)[number];
type ServicePackage = (typeof fallbackServicePackages)[number];
type ReportageRate = (typeof fallbackReportageRates)[number];

async function fetchSanity<T>(query: string, params?: Record<string, string>) {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  try {
    return params
      ? await client.fetch<T>(query, params)
      : await client.fetch<T>(query);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return fetchSanity<SiteSettings>(siteSettingsQuery);
}

export async function getHomePageContent(): Promise<HomePageContent | null> {
  return fetchSanity<HomePageContent>(homePageQuery);
}

export async function getFilms(): Promise<Film[]> {
  const films = await fetchSanity<Film[]>(filmsQuery);
  return films?.length ? films : [];
}

export async function getServices(): Promise<Service[]> {
  const services = await fetchSanity<Service[]>(servicesQuery);
  return services?.length ? services : [];
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const steps = await fetchSanity<ProcessStep[]>(processStepsQuery);
  return steps?.length ? steps : [];
}

export async function getNotes(): Promise<Note[]> {
  const notes = await fetchSanity<Note[]>(notesQuery);
  return notes?.length ? notes : [];
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  return fetchSanity<ContactInfo>(contactInfoQuery);
}

export async function getSiteMetaData(): Promise<SiteMetaData> {
  const [settings, contact] = await Promise.all([
    getSiteSettings(),
    getContactInfo(),
  ]);

  return {
    ...fallbackSiteMeta,
    name: settings?.title || fallbackSiteMeta.name,
    intro:
      settings?.headerDescription ||
      settings?.description ||
      fallbackSiteMeta.intro,
    email: contact?.email || settings?.email || fallbackSiteMeta.email,
    telegram:
      contact?.telegramUrl ||
      settings?.telegramUrl ||
      fallbackSiteMeta.telegram,
    instagram:
      contact?.instagramUrl ||
      settings?.instagramUrl ||
      fallbackSiteMeta.instagram,
  };
}

export async function getFooterLinksData() {
  const meta = await getSiteMetaData();

  return [
    { href: meta.telegram, label: "Telegram" },
    { href: meta.instagram, label: "Instagram" },
    { href: `mailto:${meta.email}`, label: "Email" },
    { href: `tel:${meta.phone.replace(/[^\d+]/g, "")}`, label: "Телефон" },
  ];
}

export async function getNavigationLinksData() {
  return fallbackNavigationLinks;
}

export async function getFeaturedProjectsData(): Promise<FeaturedProject[]> {
  const films = await getFilms();
  if (!films.length) {
    return fallbackFeaturedProjects;
  }

  return films.slice(0, 3).map((film, index) => ({
    slug:
      film.slug || fallbackFeaturedProjects[index]?.slug || `film-${index + 1}`,
    title: film.title || fallbackFeaturedProjects[index]?.title || "",
    category: film.type || fallbackFeaturedProjects[index]?.category || "",
    year: film.year || fallbackFeaturedProjects[index]?.year || "",
    location:
      film.location || fallbackFeaturedProjects[index]?.location || "",
    tags:
      film.moodTags?.length
        ? film.moodTags
        : fallbackFeaturedProjects[index]?.tags || [],
    image:
      buildSanityImageUrl(film.coverImage || film.posterImage) ||
      fallbackFeaturedProjects[index]?.image ||
      "",
    description:
      film.description ||
      film.summary ||
      fallbackFeaturedProjects[index]?.description ||
      "",
  }));
}

export async function getProcessStepsData() {
  const steps = await getProcessSteps();
  if (!steps.length) {
    return fallbackProcessSteps;
  }

  return steps.map((step, index) => ({
    title: step.title || fallbackProcessSteps[index]?.title || "",
    text: step.summary || fallbackProcessSteps[index]?.text || "",
  }));
}

export async function getJournalEntriesData(): Promise<JournalEntry[]> {
  const notes = await getNotes();
  if (!notes.length) {
    return fallbackJournalEntries;
  }

  return notes.map((note, index) => ({
    title: note.title || fallbackJournalEntries[index]?.title || "",
    type: note.label || fallbackJournalEntries[index]?.type || "Заметка",
    text: note.summary || fallbackJournalEntries[index]?.text || "",
  }));
}

export async function getServicePackagesData(): Promise<ServicePackage[]> {
  const services = await getServices();
  if (!services.length) {
    return fallbackServicePackages;
  }

  return services.map((service, index) => ({
    ...fallbackServicePackages[index % fallbackServicePackages.length],
    title:
      service.title ||
      fallbackServicePackages[index % fallbackServicePackages.length].title,
    description:
      service.description ||
      fallbackServicePackages[index % fallbackServicePackages.length]
        .description,
  }));
}

export async function getServiceExtrasData() {
  return fallbackServiceExtras;
}

export async function getReportageRatesData(): Promise<ReportageRate[]> {
  return fallbackReportageRates;
}

export async function getReportageServicesNoteData() {
  return fallbackReportageServicesNote;
}

export async function getHomeHeroVideoUrl() {
  const homePage = await getHomePageContent();
  return buildMuxPlaybackUrl(homePage?.heroVideoFile);
}
