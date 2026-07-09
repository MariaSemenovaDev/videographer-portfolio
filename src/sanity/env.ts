const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-07-09";
const token = process.env.SANITY_API_READ_TOKEN?.trim() || "";

export const sanityEnv = {
  projectId,
  dataset,
  apiVersion,
  token,
  isSanityConfigured: Boolean(projectId && dataset),
};
