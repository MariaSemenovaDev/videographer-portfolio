export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    title,
    description,
    siteUrl,
    logoText,
    headerEyebrow,
    headerDescription,
    email,
    telegramUrl,
    instagramUrl
  }
`;

export const homePageQuery = `
  *[_type == "homePage"][0]{
    eyebrow,
    title,
    summary,
    metadata,
    heroImage{
      alt,
      asset->{url}
    },
    heroVideoFile{
      asset->{
        playbackId,
        data
      }
    },
    heroCaption,
    featuredFilm->{
      slug
    },
    contactCtaTitle,
    contactCtaText
  }
`;

export const filmsQuery = `
  *[_type == "film"] | order(order asc, title asc){
    title,
    "slug": slug.current,
    year,
    type,
    location,
    "moodTags": coalesce(moodTags, []),
    summary,
    description,
    coverImage{
      alt,
      asset->{url}
    },
    posterImage{
      alt,
      asset->{url}
    },
    videoUrl,
    videoFile{
      asset->{
        playbackId,
        data
      }
    },
    gallery[]{
      alt,
      asset->{url}
    },
    featured,
    order
  }
`;

export const filmBySlugQuery = `
  *[_type == "film" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    year,
    type,
    location,
    "moodTags": coalesce(moodTags, []),
    summary,
    description,
    coverImage{
      alt,
      asset->{url}
    },
    posterImage{
      alt,
      asset->{url}
    },
    videoUrl,
    videoFile{
      asset->{
        playbackId,
        data
      }
    },
    gallery[]{
      alt,
      asset->{url}
    },
    featured,
    order
  }
`;

export const filmSlugsQuery = `
  *[_type == "film" && defined(slug.current)] | order(order asc, title asc){
    "slug": slug.current
  }
`;

export const servicesQuery = `
  *[_type == "service"] | order(order asc, title asc){
    title,
    description,
    order
  }
`;

export const processStepsQuery = `
  *[_type == "processStep"] | order(order asc, title asc){
    label,
    title,
    summary,
    order
  }
`;

export const notesQuery = `
  *[_type == "note"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    label,
    summary,
    publishedAt
  }
`;

export const contactInfoQuery = `
  *[_type == "contactInfo"][0]{
    title,
    intro,
    email,
    telegramUrl,
    instagramUrl,
    ctaLabel
  }
`;
