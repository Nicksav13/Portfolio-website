import type { SiteConfig } from "@/sanity/types";

const STATIC_LINKS = [
  { label: "Facebook",  url: "#" },
  { label: "Instagram", url: "#" },
  { label: "X.com",     url: "#" },
  { label: "Linkedin",  url: "#" },
];

export default function Footer({ config }: { config?: SiteConfig }) {
  const ctaText  = config?.footerCtaText  ?? "Have a project in mind?";
  const wordmark = config?.footerWordmark ?? "H.Studio";
  const links    = (config?.footerSocialLinks && config.footerSocialLinks.length > 0)
    ? config.footerSocialLinks
    : STATIC_LINKS;

  const desktopLinks = links.slice(0, Math.ceil(links.length / 2));
  const rightLinks   = links.slice(Math.ceil(links.length / 2));

  // Parse CTA text: bold the first all-lowercase word (usually "project")
  const ctaParts = ctaText.split(/\b([a-z]+)\b/);

  return (
    <footer className="w-full bg-black px-4 pt-12 md:px-8 md:pt-12">

      {/* Top row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between w-full" data-gsap="fade-up">

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.04em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
            {ctaText.split(/(project)/i).map((part, i) =>
              part.toLowerCase() === "project"
                ? <span key={i} className="font-black not-italic">{part}</span>
                : part
            )}
          </p>
          <a href="#contact" className="self-start border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-white hover:text-black transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
            Let&apos;s talk
          </a>
        </div>

        {/* Desktop social — centre column */}
        <div className="hidden md:block text-white text-[18px] font-normal text-center leading-[1.1] tracking-[-0.04em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
          {desktopLinks.map((l) => <p key={l.label}><a href={l.url} className="hover:opacity-60 transition-opacity">{l.label}</a></p>)}
        </div>

        {/* Desktop social — right column */}
        <div className="hidden md:block text-white text-[18px] font-normal text-right leading-[1.1] tracking-[-0.04em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
          {rightLinks.map((l) => <p key={l.label}><a href={l.url} className="hover:opacity-60 transition-opacity">{l.label}</a></p>)}
        </div>

        {/* Mobile social — stacked */}
        <div className="md:hidden flex flex-col gap-0" style={{ fontFamily: "var(--font-inter)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.url} className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.04em] uppercase hover:opacity-60 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white mt-6 md:mt-12" data-gsap="rule" />

      {/* Desktop bottom */}
      <div className="hidden md:flex items-end justify-between w-full mt-0">
        <div className="relative overflow-hidden" style={{ width: 1093, height: 219 }}>
          <div className="absolute left-0 top-0 flex items-center justify-center h-full w-[15px]">
            <p className="-rotate-90 whitespace-nowrap text-white text-[14px] uppercase leading-[1.1]" style={{ fontFamily: "var(--font-mono)" }}>
              [ Coded By Claude ]
            </p>
          </div>
          <p data-gsap="wordmark" className="absolute text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter)", fontSize: 290, letterSpacing: "-0.06em", bottom: -10, left: 20 }}>
            {wordmark}
          </p>
        </div>
        <div className="flex gap-[34px] items-center pb-8 shrink-0" style={{ fontFamily: "var(--font-inter)" }}>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">Licences</a>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">Privacy policy</a>
        </div>
      </div>

      {/* Mobile bottom */}
      <div className="md:hidden flex flex-col items-center gap-4 mt-6 pb-0">
        <div className="flex gap-[34px] items-center" style={{ fontFamily: "var(--font-inter)" }}>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">Licences</a>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">Privacy policy</a>
        </div>
        <div className="w-full overflow-hidden">
          <p className="text-white text-[10px] uppercase leading-[1.1] mb-2" style={{ fontFamily: "var(--font-mono)" }}>[ Coded By Claude ]</p>
          <p data-gsap="wordmark" className="text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter)", fontSize: 91, letterSpacing: "-0.06em" }}>
            {wordmark}
          </p>
        </div>
      </div>

    </footer>
  );
}
