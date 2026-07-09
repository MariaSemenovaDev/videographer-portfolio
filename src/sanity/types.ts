export type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
    url?: string;
  };
};

export type SanityMuxVideo = {
  asset?: {
    playbackId?: string;
    data?: {
      duration?: number;
    };
  };
};

export type SiteSettings = {
  title?: string;
  description?: string;
  siteUrl?: string;
  logoText?: string;
  headerEyebrow?: string;
  headerDescription?: string;
  email?: string;
  telegramUrl?: string;
  instagramUrl?: string;
};

export type HomePageContent = {
  eyebrow?: string;
  title?: string;
  summary?: string;
  metadata?: string[];
  heroImage?: SanityImage;
  heroVideoFile?: SanityMuxVideo;
  heroCaption?: string;
  featuredFilm?: {
    slug?: {
      current?: string;
    };
  };
  contactCtaTitle?: string;
  contactCtaText?: string;
};

export type Film = {
  title?: string;
  slug?: string;
  year?: string;
  type?: string;
  location?: string;
  moodTags?: string[];
  summary?: string;
  description?: string;
  coverImage?: SanityImage;
  posterImage?: SanityImage;
  videoUrl?: string;
  videoFile?: SanityMuxVideo;
  gallery?: SanityImage[];
  featured?: boolean;
  order?: number;
};

export type Service = {
  title?: string;
  description?: string;
  order?: number;
};

export type ProcessStep = {
  label?: string;
  title?: string;
  summary?: string;
  order?: number;
};

export type Note = {
  title?: string;
  slug?: string;
  label?: string;
  summary?: string;
  publishedAt?: string;
};

export type ContactInfo = {
  title?: string;
  intro?: string;
  email?: string;
  telegramUrl?: string;
  instagramUrl?: string;
  ctaLabel?: string;
};
