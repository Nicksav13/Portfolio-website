import { defineType, defineField } from "sanity";

export const siteConfig = defineType({
  name: "siteConfig",
  title: "Site Configuration",
  type: "document",
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────
    defineField({ name: "heroName",        title: "Hero — Full Name",          type: "string" }),
    defineField({ name: "heroLabel",       title: "Hero — Hello Label",        type: "string",
                  description: "e.g. Hello i'm" }),
    defineField({ name: "heroDescription", title: "Hero — Description",        type: "text" }),
    defineField({ name: "heroImage",       title: "Hero — Background Photo",   type: "image",
                  options: { hotspot: true } }),

    // ── About Section ─────────────────────────────────────────────────
    defineField({ name: "aboutYearsLabel",      title: "About — Years Label",       type: "string",
                  description: "e.g. 8+ years in industry" }),
    defineField({ name: "aboutLine1",           title: "About — Line 1",            type: "string" }),
    defineField({ name: "aboutLine2",           title: "About — Line 2",            type: "string" }),
    defineField({ name: "aboutLine3",           title: "About — Line 3",            type: "string" }),
    defineField({ name: "aboutLine4",           title: "About — Line 4",            type: "string" }),
    defineField({ name: "aboutLine5",           title: "About — Line 5",            type: "string" }),
    defineField({ name: "aboutFreelancerLabel", title: "About — Freelancer Tag",    type: "string",
                  description: "e.g. [ creative freelancer ]" }),

    // ── About Bio ─────────────────────────────────────────────────────
    defineField({ name: "bioParagraph1", title: "Bio — Paragraph 1", type: "text" }),
    defineField({ name: "bioParagraph2", title: "Bio — Paragraph 2", type: "text" }),
    defineField({ name: "bioPortrait",   title: "Bio — Portrait Photo",
                  type: "image", options: { hotspot: true } }),

    // ── Photo Break ───────────────────────────────────────────────────
    defineField({ name: "photoBreakDesktop", title: "Photo Break — Desktop Image",
                  type: "image", options: { hotspot: true } }),
    defineField({ name: "photoBreakMobile",  title: "Photo Break — Mobile Image",
                  type: "image", options: { hotspot: true } }),

    // ── Footer ────────────────────────────────────────────────────────
    defineField({ name: "footerCtaText",  title: "Footer — CTA Headline",  type: "string",
                  description: "e.g. Have a project in mind?" }),
    defineField({ name: "footerWordmark", title: "Footer — Studio Name",   type: "string",
                  description: "e.g. H.Studio" }),
    defineField({
      name: "footerSocialLinks",
      title: "Footer — Social Links",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "label", type: "string", title: "Label" }),
          defineField({ name: "url",   type: "url",    title: "URL"   }),
        ],
      }],
    }),
  ],
});
