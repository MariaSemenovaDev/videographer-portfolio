import imageUrlBuilder from "@sanity/image-url";
import { getSanityClient } from "@/sanity/client";
import type { SanityImage, SanityMuxVideo } from "@/sanity/types";

export function buildSanityImageUrl(source?: SanityImage, width = 1800) {
  const client = getSanityClient();

  if (!client || !source) {
    return source?.asset?.url;
  }

  try {
    return imageUrlBuilder(client).image(source).width(width).fit("max").url();
  } catch {
    return source.asset?.url;
  }
}

export function buildMuxPlaybackUrl(source?: SanityMuxVideo) {
  const playbackId = source?.asset?.playbackId;

  if (!playbackId) {
    return undefined;
  }

  return `https://stream.mux.com/${playbackId}.m3u8`;
}
