import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "siteUrl", title: "Site URL", type: "url" }),
    defineField({ name: "logoText", title: "Logo Text", type: "string" }),
    defineField({ name: "headerEyebrow", title: "Header Eyebrow", type: "string" }),
    defineField({ name: "headerDescription", title: "Header Description", type: "text" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "telegramUrl", title: "Telegram URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
  ],
});
