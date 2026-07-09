import { defineConfig } from "sanity";
import { muxInput } from "sanity-plugin-mux-input";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error(
    "SANITY_STUDIO_PROJECT_ID is missing. Add it to studio/.env.local before running Sanity Studio.",
  );
}

export default defineConfig({
  name: "default",
  title: "Videographer Portfolio Studio",
  projectId,
  dataset,
  plugins: [structureTool(), muxInput()],
  schema: {
    types: schemaTypes,
  },
});
