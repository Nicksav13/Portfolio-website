import type { Project } from "@/sanity/types";
import { urlFor } from "@/sanity/image";

const ARROW_ICON = "https://www.figma.com/api/mcp/asset/93bf7f0b-1c1f-4c59-b678-1618a3c4325a";

const STATIC_PROJECTS = [
  { _id: "1", title: "Surfers Paradise",   tags: ["Social Media", "Photography"],
    imgDesktop: "https://www.figma.com/api/mcp/asset/8eee15e1-f0e0-412f-a4a7-98f5da912e41",
    imgMobile:  "https://www.figma.com/api/mcp/asset/5ecd5343-6e04-4d1f-a264-83acf840c857", desktopH: 744 },
  { _id: "2", title: "Cyberpunk Caffe",    tags: ["Social Media", "Photography"],
    imgDesktop: "https://www.figma.com/api/mcp/asset/102ce75f-10a6-4e24-a0bb-b4af70422667",
    imgMobile:  "https://www.figma.com/api/mcp/asset/035f9314-116a-41a7-8f71-0ca4405f4d84", desktopH: 699 },
  { _id: "3", title: "Agency 976",         tags: ["Social Media", "Photography"],
    imgDesktop: "https://www.figma.com/api/mcp/asset/1fcda6cd-70d4-4d2a-9aff-ec26eec1d14c",
    imgMobile:  "https://www.figma.com/api/mcp/asset/d52ac31d-67dc-4fa7-adc4-a6737371c417", desktopH: 699 },
  { _id: "4", title: "Minimal Playground", tags: ["Social Media", "Photography"],
    imgDesktop: "https://www.figma.com/api/mcp/asset/a6f57b00-74d9-404e-bc81-34fd5e57e5c8",
    imgMobile:  "https://www.figma.com/api/mcp/asset/866d5842-9163-4297-9ebd-db0d69cd317f", desktopH: 744 },
];

function Tag({ label }: { label: string }) {
  return (
    <span
      className="px-2 py-1 rounded-full text-[14px] font-medium tracking-[-0.04em] text-[#111] whitespace-nowrap"
      style={{ fontFamily: "var(--font-inter)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.3)" }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ title, tags, img, heightPx, mobileH = 390 }: {
  title: string; tags: string[]; img: string; heightPx?: number; mobileH?: number;
}) {
  return (
    <div className="flex flex-col gap-[10px] w-full shrink-0">
      <div className="relative w-full overflow-hidden" style={{ height: heightPx ? `${heightPx}px` : undefined }}>
        <div className="md:hidden absolute inset-0" style={{ height: `${mobileH}px`, position: "relative" }}>
          <img src={img} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 flex gap-3">{tags.map((t) => <Tag key={t} label={t} />)}</div>
        </div>
        <div className="hidden md:block absolute inset-0">
          <img src={img} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 flex gap-3">{tags.map((t) => <Tag key={t} label={t} />)}</div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="font-black text-[24px] md:text-[36px] uppercase tracking-[-0.04em] text-black leading-[1.1]" style={{ fontFamily: "var(--font-inter)" }}>
          {title}
        </p>
        <div className="-rotate-90 w-8 h-8 shrink-0">
          <img src={ARROW_ICON} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="relative flex gap-3 items-stretch w-full md:w-[465px]">
      <div className="flex flex-col justify-between shrink-0 w-4">
        <span className="block w-4 h-4 border-t border-l border-black" />
        <span className="block w-4 h-4 border-b border-l border-black" />
      </div>
      <div className="flex flex-col gap-[10px] py-3 flex-1">
        <p className="text-[14px] font-normal italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]" style={{ fontFamily: "var(--font-inter)" }}>
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <a href="#contact" className="self-start bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-neutral-800 transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
          Let&apos;s talk
        </a>
      </div>
      <div className="flex flex-col justify-between shrink-0 w-4">
        <span className="block w-4 h-4 border-t border-r border-black" />
        <span className="block w-4 h-4 border-b border-r border-black" />
      </div>
    </div>
  );
}

export default function SelectedWork({ projects }: { projects?: Project[] }) {
  const hasSanity = projects && projects.length > 0;

  const items = hasSanity
    ? projects!.map((p) => ({
        _id: p._id,
        title: p.title,
        tags: p.tags ?? [],
        imgDesktop: p.imageDesktop ? urlFor(p.imageDesktop).width(800).url() : "",
        imgMobile:  p.imageMobile  ? urlFor(p.imageMobile).width(600).url()  : "",
        desktopH: p.desktopHeightPx ?? 700,
      }))
    : STATIC_PROJECTS.map((p) => ({
        _id: p._id, title: p.title, tags: p.tags,
        imgDesktop: p.imgDesktop, imgMobile: p.imgMobile, desktopH: p.desktopH,
      }));

  const [p0, p1, p2, p3] = items;

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-20">

      {/* Header */}
      <div className="flex items-start justify-between w-full mb-[61px]" data-gsap="fade-up">
        <div className="flex items-start gap-[10px]">
          <div className="font-light text-[32px] md:text-[96px] uppercase tracking-[-0.08em] leading-[0.86] text-black" style={{ fontFamily: "var(--font-inter)" }}>
            <p>Selected</p><p>Work</p>
          </div>
          <span className="text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 pt-1" style={{ fontFamily: "var(--font-mono)" }}>004</span>
        </div>
        <div className="hidden md:flex items-center justify-center h-[110px] w-[15px]">
          <p className="-rotate-90 whitespace-nowrap text-[14px] text-[#1f1f1f] leading-[1.1] uppercase" style={{ fontFamily: "var(--font-mono)" }}>[ portfolio ]</p>
        </div>
        <span className="md:hidden text-[14px] text-[#1f1f1f] leading-[1.1] uppercase" style={{ fontFamily: "var(--font-mono)" }}>[ portfolio ]</span>
      </div>

      {/* Desktop: staggered two-column */}
      <div className="hidden md:flex gap-6 items-end w-full">
        <div className="flex flex-col gap-[10px] flex-1 justify-between">
          {p0 && <div data-gsap="project-card"><ProjectCard title={p0.title} tags={p0.tags} img={p0.imgDesktop} heightPx={p0.desktopH} /></div>}
          {p1 && <div className="mt-[10px]" data-gsap="project-card"><ProjectCard title={p1.title} tags={p1.tags} img={p1.imgDesktop} heightPx={p1.desktopH} /></div>}
          <div className="mt-[10px]"><CtaBox /></div>
        </div>
        <div className="flex flex-col flex-1 pt-[240px] gap-[10px]">
          {p2 && <div data-gsap="project-card"><ProjectCard title={p2.title} tags={p2.tags} img={p2.imgDesktop} heightPx={p2.desktopH} /></div>}
          {p3 && <div className="mt-[117px]" data-gsap="project-card"><ProjectCard title={p3.title} tags={p3.tags} img={p3.imgDesktop} heightPx={p3.desktopH} /></div>}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-6">
        {items.map((p) => (
          <div key={p._id} data-gsap="project-card">
            <ProjectCard title={p.title} tags={p.tags} img={p.imgMobile} mobileH={390} />
          </div>
        ))}
        <CtaBox />
      </div>

    </section>
  );
}
