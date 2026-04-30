"use client";

import { useEffect, useRef, useState } from "react";

// Logo images (Figma assets — valid 7 days, replace with hosted versions)
const LOGO_1 = "https://www.figma.com/api/mcp/asset/cbdbbc77-17f8-4c2f-9968-15d379d8736b"; // Lukas
const LOGO_2 = "https://www.figma.com/api/mcp/asset/f5090361-475c-4d11-a791-6a19c1307c59"; // Marko
const LOGO_3 = "https://www.figma.com/api/mcp/asset/b8df458d-2fd7-4241-a000-f9963168c5e6"; // Sarah
const LOGO_4 = "https://www.figma.com/api/mcp/asset/b6c5d02f-344f-4be5-8951-09a0ba29525d"; // Sofia

interface Testimonial {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  rotate: number;             // resting tilt (deg)
  from: "left" | "right";    // entry direction
  // desktop absolute position (px, within 1440-wide section)
  left: number;
  top: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    logo: LOGO_2,
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    rotate: -6.85, from: "left",
    left: 102, top: 142,
  },
  {
    logo: LOGO_1,
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    rotate: 2.9, from: "right",
    left: 676, top: 272,
  },
  {
    logo: LOGO_3,
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    rotate: 2.23, from: "left",
    left: 305, top: 553,
  },
  {
    logo: LOGO_4,
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    rotate: -4.15, from: "right",
    left: 987, top: 546,
  },
];

// ── Single card ─────────────────────────────────────────────────────────────
function Card({
  t,
  visible,
  delay,
}: {
  t: Testimonial;
  visible: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  const tx  = visible ? 0 : t.from === "left" ? -140 : 140;
  const rot = hovered  ? 0 : t.rotate;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: `translateX(${tx}px) rotate(${rot}deg)`,
        opacity: visible ? 1 : 0,
        transition: [
          `transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          `opacity   0.55s ease                         ${delay}ms`,
        ].join(", "),
        willChange: "transform, opacity",
      }}
    >
      <div
        className="flex flex-col gap-4 p-6 rounded-[4px] w-[353px] md:w-[353px]"
        style={{
          backgroundColor: "#f1f1f1",
          border: "1px solid #ddd",
        }}
      >
        <img
          src={t.logo}
          alt=""
          className="object-contain object-left"
          style={{ width: t.logoW, height: t.logoH }}
        />
        <p
          className="text-[#1f1f1f] text-[18px] leading-[1.3] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {t.quote}
        </p>
        <p
          className="text-black text-[16px] font-black leading-[1.1] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {t.name}
        </p>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white overflow-hidden">

      {/* ── DESKTOP ──────────────────────────────────────────────────────── */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: 987 }}
      >
        {/* "Testimonials" text — centred, behind the cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <p
            className="text-black font-medium capitalize leading-[1.1] text-center"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 198,
              letterSpacing: "-0.07em",
            }}
          >
            Testimonials
          </p>
        </div>

        {/* Cards — absolutely positioned to match Figma */}
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className="absolute"
            style={{ left: t.left, top: t.top }}
          >
            <Card t={t} visible={visible} delay={i * 130} />
          </div>
        ))}
      </div>

      {/* ── MOBILE ───────────────────────────────────────────────────────── */}
      <div className="md:hidden pt-16 pb-12">
        {/* Title */}
        <p
          className="text-black font-medium capitalize text-center mb-8 px-4"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 64,
            letterSpacing: "-0.07em",
            lineHeight: 0.8,
          }}
        >
          Testimonials
        </p>

        {/* Swipeable row — all 4 cards */}
        <div
          className="flex gap-4 overflow-x-auto px-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Card t={t} visible={visible} delay={i * 130} />
            </div>
          ))}
          {/* trailing spacer so last card doesn't hug the edge */}
          <div className="shrink-0 w-4" />
        </div>
      </div>

    </section>
  );
}
