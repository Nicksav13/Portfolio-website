import { ReactNode } from "react";
import type { SiteConfig } from "@/sanity/types";

function Heading({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(32px,6.67vw,96px)] whitespace-nowrap"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </span>
  );
}

function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[#1f1f1f] text-[14px] leading-[1.1] uppercase shrink-0"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}

export default function AboutSection({ config }: { config?: SiteConfig }) {
  const yearsLabel      = config?.aboutYearsLabel      ?? "8+ years in industry";
  const line1           = config?.aboutLine1           ?? "A creative director   /";
  const line2           = config?.aboutLine2           ?? "Photographer";
  const line3           = config?.aboutLine3           ?? "Born & raised";
  const line4           = config?.aboutLine4           ?? "on the south side";
  const line5           = config?.aboutLine5           ?? "of chicago.";
  const freelancerLabel = config?.aboutFreelancerLabel ?? "[ creative freelancer ]";

  return (
    <section className="w-full bg-white px-8 py-12 md:py-[120px]">

      {/* Header */}
      <div className="flex flex-col gap-3 items-end mb-6" data-gsap="fade-up">
        <MonoLabel>[ {yearsLabel} ]</MonoLabel>
        <div className="w-full h-px bg-[#1f1f1f]" data-gsap="rule" />
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-center md:hidden mb-1">
          <MonoLabel>001</MonoLabel>
        </div>

        <div className="flex gap-3 items-start justify-center md:justify-start" data-gsap="line">
          <Heading>{line1}</Heading>
          <span
            className="hidden md:block text-[#1f1f1f] text-[14px] leading-[1.1] shrink-0 pt-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            001
          </span>
        </div>

        <div className="text-center md:text-left md:px-[15.5%]" data-gsap="line">
          <Heading>{line2}</Heading>
        </div>

        <div className="text-center md:text-left md:pl-[44.3%]" data-gsap="line">
          <Heading>
            {line3.includes("&") ? (
              <>
                Born{" "}
                <span className="italic" style={{ fontFamily: "var(--font-playfair)" }}>&amp;</span>
                {" "}raised
              </>
            ) : line3}
          </Heading>
        </div>

        <div className="text-center md:text-left" data-gsap="line">
          <Heading>{line4}</Heading>
        </div>

        <div className="md:pl-[44%]" data-gsap="line">
          <div className="flex flex-col items-center gap-3 md:hidden">
            <Heading>{line5}</Heading>
            <MonoLabel>{freelancerLabel}</MonoLabel>
          </div>
          <div className="hidden md:flex items-baseline gap-4">
            <Heading>{line5}</Heading>
            <MonoLabel>{freelancerLabel}</MonoLabel>
          </div>
        </div>
      </div>
    </section>
  );
}
