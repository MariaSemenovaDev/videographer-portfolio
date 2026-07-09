import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({
      name: "metadata",
      title: "Metadata",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt", type: "string" })],
    }),
    defineField({
      name: "heroVideoFile",
      title: "Hero Video File",
      type: "mux.video",
      validation: (rule) =>
        rule.custom((value) => {
          const duration = (value as { asset?: { data?: { duration?: number } } } | undefined)
            ?.asset?.data?.duration;

          if (typeof duration === "number" && duration > 6 * 60) {
            return "Hero video must be 6 minutes or shorter.";
          }

          return true;
        }),
    }),
    defineField({ name: "heroCaption", title: "Hero Caption", type: "string" }),
    defineField({
      name: "featuredFilm",
      title: "Featured Film",
      type: "reference",
      to: [{ type: "film" }],
    }),
    defineField({ name: "contactCtaTitle", title: "Contact CTA Title", type: "string" }),
    defineField({ name: "contactCtaText", title: "Contact CTA Text", type: "text" }),
  ],
});
