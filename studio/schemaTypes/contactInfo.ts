import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "telegramUrl", title: "Telegram URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
  ],
});
