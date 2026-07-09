import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "film",
  title: "Film",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "type", title: "Type", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "moodTags",
      title: "Mood Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt", type: "string" })],
    }),
    defineField({
      name: "posterImage",
      title: "Poster Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt", type: "string" })],
    }),
    defineField({ name: "videoUrl", title: "Video URL", type: "url" }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "mux.video",
      validation: (rule) =>
        rule.custom((value) => {
          const duration = (value as { asset?: { data?: { duration?: number } } } | undefined)
            ?.asset?.data?.duration;

          if (typeof duration === "number" && duration > 10 * 60) {
            return "Film video must be 10 minutes or shorter.";
          }

          return true;
        }),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt", type: "string" })],
        }),
      ],
    }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
