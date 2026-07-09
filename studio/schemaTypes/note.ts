import { defineField, defineType } from "sanity";

export default defineType({
  name: "note",
  title: "Note",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "publishedAt", title: "Published At", type: "date" }),
  ],
});
