import { client } from "./client";

export const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0]{
  heroName, heroLabel, heroDescription, heroImage,
  aboutYearsLabel, aboutLine1, aboutLine2, aboutLine3, aboutLine4, aboutLine5, aboutFreelancerLabel,
  bioParagraph1, bioParagraph2, bioPortrait,
  photoBreakDesktop, photoBreakMobile,
  footerCtaText, footerWordmark,
  footerSocialLinks[]{ label, url }
}`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  _id, number, title, description, imageDesktop, imageMobile
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc){
  _id, title, tags, imageDesktop, imageMobile, desktopHeightPx
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  _id, logo, logoW, logoH, quote, name, rotate, from, desktopLeft, desktopTop
}`;

export async function getSiteConfig() {
  return client.fetch(SITE_CONFIG_QUERY, {}, { next: { revalidate: 60 } });
}
export async function getServices() {
  return client.fetch(SERVICES_QUERY, {}, { next: { revalidate: 60 } });
}
export async function getProjects() {
  return client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 60 } });
}
export async function getTestimonials() {
  return client.fetch(TESTIMONIALS_QUERY, {}, { next: { revalidate: 60 } });
}
