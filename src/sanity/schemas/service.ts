import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "number",       title: "Number Label",       type: "string",
                  description: "e.g. [ 1 ]" }),
    defineField({ name: "title",        title: "Title",              type: "string" }),
    defineField({ name: "description",  title: "Description",        type: "text"   }),
    defineField({ name: "imageDesktop", title: "Image — Desktop",    type: "image",
                  options: { hotspot: true } }),
    defineField({ name: "imageMobile",  title: "Image — Mobile",     type: "image",
                  options: { hotspot: true } }),
    defineField({ name: "order",        title: "Display Order",      type: "number" }),
  ],
  orderings: [{
    title: "Display Order",
    name: "orderAsc",
    by: [{ field: "order", direction: "asc" }],
  }],
});
