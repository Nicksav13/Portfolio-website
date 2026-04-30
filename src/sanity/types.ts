export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
}

export interface SiteConfig {
  heroName: string;
  heroLabel: string;
  heroDescription: string;
  heroImage: SanityImage;
  aboutYearsLabel: string;
  aboutLine1: string;
  aboutLine2: string;
  aboutLine3: string;
  aboutLine4: string;
  aboutLine5: string;
  aboutFreelancerLabel: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioPortrait: SanityImage;
  photoBreakDesktop: SanityImage;
  photoBreakMobile: SanityImage;
  footerCtaText: string;
  footerWordmark: string;
  footerSocialLinks: { label: string; url: string }[];
}

export interface Service {
  _id: string;
  number: string;
  title: string;
  description: string;
  imageDesktop: SanityImage;
  imageMobile: SanityImage;
}

export interface Project {
  _id: string;
  title: string;
  tags: string[];
  imageDesktop: SanityImage;
  imageMobile: SanityImage;
  desktopHeightPx: number;
}

export interface Testimonial {
  _id: string;
  logo: SanityImage;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  rotate: number;
  from: "left" | "right";
  desktopLeft: number;
  desktopTop: number;
}
