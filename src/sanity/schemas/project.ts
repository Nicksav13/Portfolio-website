import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title",           title: "Title",                    type: "string" }),
    defineField({ name: "tags",            title: "Tags",                     type: "array",
                  of: [{ type: "string" }] }),
    defineField({ name: "imageDesktop",    title: "Image — Desktop",          type: "image",
                  options: { hotspot: true } }),
    defineField({ name: "imageMobile",     title: "Image — Mobile",           type: "image",
                  options: { hotspot: true } }),
    defineField({ name: "desktopHeightPx", title: "Desktop Card Height (px)", type: "number",
                  description: "Match Figma layout — e.g. 744 or 699" }),
    defineField({ name: "order",           title: "Display Order",            type: "number" }),
  ],
  orderings: [{
    title: "Display Order",
    name: "orderAsc",
    by: [{ field: "order", direction: "asc" }],
  }],
});
