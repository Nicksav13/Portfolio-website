"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/739a9495-613d-4327-a387-6711c8eda2d4";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const labelRef     = useRef<HTMLSpanElement>(null);
  const nameDesktop  = useRef<HTMLHeadingElement>(null);
  const nameMobile   = useRef<HTMLDivElement>(null);
  const descRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // [Hello I'm] slides in from left
      tl.fromTo(labelRef.current,
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        0.2
      );

      // Desktop name rises up
      tl.fromTo(nameDesktop.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power4.out" },
        0.3
      );

      // Mobile name — two lines stagger
      if (nameMobile.current) {
        tl.fromTo(Array.from(nameMobile.current.children),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.14, ease: "power4.out" },
          0.3
        );
      }

      // Description + CTA
      tl.fromTo(Array.from(descRef.current!.children),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.12 },
        0.65
      );
    });

    return () => ctx.revert();
  }, []);


  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#b5bec0" }}
    >
      {/* ── BACKGROUND IMAGE ──
          Mobile: full cover top-to-bottom, object-top anchors the face.
          Desktop: Figma-precise wide crop centred on the subject.
      */}
      <img
        src={HERO_IMAGE}
        alt=""
        className="md:hidden absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />
      <div
        className="hidden md:block absolute pointer-events-none select-none -translate-y-1/2"
        style={{
          left: "-34.79%",
          right: "-34.79%",
          top: "calc(50% + 88.84px)",
          aspectRatio: "2291 / 1346",
        }}
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full max-w-none object-bottom"
        />
      </div>

      {/* ── GRADIENT BLUR ──
          Starts below the nav (top: 10%) so it never creates a compositing
          rectangle artifact over the navigation bar.
      */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          top: "10%",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maskImage:
            "linear-gradient(to top, black 0%, black 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 25%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 80%, transparent 100%)",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative flex flex-col h-full px-8">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between py-6 shrink-0">
          <span
            className="font-semibold text-[16px] tracking-[-0.04em] text-black"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            H.Studio
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-14">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-semibold text-[16px] tracking-[-0.04em] text-black hover:opacity-60 transition-opacity"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-[16px] py-[12px] bg-black text-white text-[14px] font-medium tracking-[-0.04em] rounded-[24px] whitespace-nowrap hover:bg-neutral-800 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let&apos;s talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile full-screen overlay menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-10">
            {/* Close button */}
            <button
              className="absolute top-6 right-8 flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block h-[1.5px] w-6 bg-white rotate-45 translate-y-[3.5px]" />
              <span className="block h-[1.5px] w-6 bg-white -rotate-45 -translate-y-[3.5px]" />
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-semibold text-[28px] tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-inter)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 flex items-center px-[20px] py-[14px] bg-white text-black text-[14px] font-medium tracking-[-0.04em] rounded-[24px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        )}

        {/* Responsive gap between nav and hero text.
            28.3vh ≈ 240px on the Figma's 847px frame, capped so it
            doesn't grow unbounded on tall screens. */}
        <div className="shrink-0 h-[clamp(60px,28.3vh,240px)]" />

        {/* ── HERO TEXT BLOCK ── */}
        <div className="shrink-0 flex flex-col w-full">

          {/* [ Hello I'm ] — flush with the H of Harvey (same left edge). */}
          <div style={{ marginBottom: "-8px" }}>
            <span
              ref={labelRef}
              className="text-white uppercase text-[14px] font-normal leading-[1.1] mix-blend-overlay whitespace-nowrap"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              [ Hello i&apos;m ]
            </span>
          </div>

          {/* Mobile: same left/right margins as the paragraph (container px-8).
              Single large size; left-aligned so it reads like the copy below. */}
          <div
            ref={nameMobile}
            className="md:hidden mix-blend-overlay text-white font-medium capitalize tracking-[-0.07em] leading-[0.88] text-left text-[22vw]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <div>Harvey</div>
            <div>Specter</div>
          </div>

          {/* Desktop: single h1, fluid size, blend over photo. */}
          <h1
            ref={nameDesktop}
            className="
              hidden md:block
              w-full text-center text-white font-medium capitalize
              mix-blend-overlay whitespace-nowrap
              tracking-[-0.07em]
              md:text-[clamp(120px,13.75vw,198px)] md:leading-[1.05]
            "
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Harvey&nbsp;&nbsp;&nbsp;Specter
          </h1>

          {/* Description + CTA
              Desktop: right-aligned under the heading.
              Mobile: left-aligned, full width below heading. */}
          <div className="mt-4 flex md:justify-end">
            <div
              ref={descRef}
              className="flex flex-col gap-[17px] w-full md:w-[294px]"
            >
              <p
                className="text-[#1f1f1f] text-[14px] font-bold italic uppercase tracking-[-0.04em] leading-[1.1]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>{" "}
                creative studio creating beautiful digital experiences
                and products. We are an{" "}
                <span className="font-normal">award winning</span>{" "}
                desing and art group specializing in branding, web
                design and engineering.
              </p>
              <a
                href="#contact"
                className="self-start flex items-center justify-center px-[16px] py-[12px] bg-black text-white text-[14px] font-medium tracking-[-0.04em] rounded-[24px] whitespace-nowrap hover:bg-neutral-800 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>

        {/* Absorb remaining space at bottom */}
        <div className="flex-1 min-h-8" />
      </div>
    </section>
  );
}
