import { createClient } from "@sanity/client";
import { sanityEnv } from "@/sanity/env";

export function getSanityClient() {
  if (!sanityEnv.isSanityConfigured) {
    return null;
  }

  return createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    useCdn: true,
    token: sanityEnv.token || undefined,
    perspective: "published",
  });
}
