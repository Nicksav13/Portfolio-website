"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── Utility: make a ScrollTrigger for an element ──────────────────────
      const st = (trigger: Element, start = "top 88%") => ({
        scrollTrigger: { trigger, start, once: true },
      });

      // ── Generic fade-up blocks ─────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          ...st(el),
        });
      });

      // ── Horizontal rule: scaleX expand from left ───────────────────────────
      document.querySelectorAll<HTMLElement>("[data-gsap='rule']").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.inOut",
          ...st(el),
        });
      });

      // ── AboutSection text lines — stagger cascade ─────────────────────────
      const lines = document.querySelectorAll<HTMLElement>("[data-gsap='line']");
      if (lines.length) {
        gsap.from(lines, {
          y: 55,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: lines[0],
            start: "top 90%",
            once: true,
          },
        });
      }

      // ── Service rows — stagger in with a slight skew ───────────────────────
      document.querySelectorAll<HTMLElement>("[data-gsap='service-row']").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          skewY: 1.5,
          duration: 0.85,
          ease: "power3.out",
          delay: i * 0.07,
          ...st(el, "top 92%"),
        });
      });

      // ── Project cards — scale + fade stagger ──────────────────────────────
      document.querySelectorAll<HTMLElement>("[data-gsap='project-card']").forEach((el, i) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08,
          ...st(el, "top 92%"),
        });
      });

      // ── Footer wordmark — big theatrical slide up ──────────────────────────
      document.querySelectorAll<HTMLElement>("[data-gsap='wordmark']").forEach((el) => {
        gsap.from(el, {
          y: 90,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          ...st(el, "top 95%"),
        });
      });

    }); // end context

    return () => ctx.revert();
  }, []);

  return null;
}
