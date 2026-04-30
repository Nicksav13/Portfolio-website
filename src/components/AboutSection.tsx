import { ReactNode } from "react";

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

export default function AboutSection() {
  return (
    <section className="w-full bg-white px-8 py-12 md:py-[120px]">

      {/* ── HEADER: label + rule ── */}
      <div className="flex flex-col gap-3 items-end mb-6" data-gsap="fade-up">
        <MonoLabel>[ 8+ years in industry ]</MonoLabel>
        <div className="w-full h-px bg-[#1f1f1f]" data-gsap="rule" />
      </div>

      {/* ── TEXT BLOCK ── */}
      <div className="flex flex-col gap-2">

        {/* Mobile: 001 sits above the first line, centered.
            Desktop: hidden — 001 sits inline beside the heading. */}
        <div className="flex justify-center md:hidden mb-1">
          <MonoLabel>001</MonoLabel>
        </div>

        {/* Line 1 — A CREATIVE DIRECTOR   / */}
        <div className="flex gap-3 items-start justify-center md:justify-start" data-gsap="line">
          <Heading>A creative director&nbsp;&nbsp;&nbsp;/</Heading>
          {/* Desktop 001 label */}
          <span
            className="hidden md:block text-[#1f1f1f] text-[14px] leading-[1.1] shrink-0 pt-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            001
          </span>
        </div>

        {/* Line 2 — PHOTOGRAPHER (centred padding on desktop) */}
        <div className="text-center md:text-left md:px-[15.5%]" data-gsap="line">
          <Heading>Photographer</Heading>
        </div>

        {/* Line 3 — BORN & RAISED (pushed right on desktop) */}
        <div className="text-center md:text-left md:pl-[44.3%]" data-gsap="line">
          <Heading>
            Born{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &amp;
            </span>
            {" "}raised
          </Heading>
        </div>

        {/* Line 4 — ON THE SOUTH SIDE (back to left edge) */}
        <div className="text-center md:text-left" data-gsap="line">
          <Heading>on the south side</Heading>
        </div>

        {/* Line 5 — OF CHICAGO. + [ creative freelancer ] */}
        <div className="md:pl-[44%]" data-gsap="line">
          {/* Mobile: stacked, centered */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            <Heading>of chicago.</Heading>
            <MonoLabel>[ creative freelancer ]</MonoLabel>
          </div>
          {/* Desktop: inline beside heading */}
          <div className="hidden md:flex items-baseline gap-4">
            <Heading>of chicago.</Heading>
            <MonoLabel>[ creative freelancer ]</MonoLabel>
          </div>
        </div>

      </div>
    </section>
  );
}
