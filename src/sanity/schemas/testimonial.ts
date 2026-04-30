import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "logo",        title: "Company Logo",               type: "image" }),
    defineField({ name: "logoW",       title: "Logo Width (px)",            type: "number" }),
    defineField({ name: "logoH",       title: "Logo Height (px)",           type: "number" }),
    defineField({ name: "quote",       title: "Quote",                      type: "text"   }),
    defineField({ name: "name",        title: "Author Name",                type: "string" }),
    defineField({ name: "rotate",      title: "Card Rotation (deg)",        type: "number",
                  description: "Resting tilt — negative tilts left, positive tilts right" }),
    defineField({ name: "from",        title: "Entry Direction",            type: "string",
                  options: { list: [{ title: "Left", value: "left" }, { title: "Right", value: "right" }] } }),
    defineField({ name: "desktopLeft", title: "Desktop Position — Left (px)", type: "number" }),
    defineField({ name: "desktopTop",  title: "Desktop Position — Top (px)",  type: "number" }),
    defineField({ name: "order",       title: "Display Order",              type: "number" }),
  ],
  orderings: [{
    title: "Display Order",
    name: "orderAsc",
    by: [{ field: "order", direction: "asc" }],
  }],
});
