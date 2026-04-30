// Section 007 — Footer

export default function Footer() {
  return (
    <footer className="w-full bg-black px-4 pt-12 md:px-8 md:pt-12">

      {/* ── Top row ── */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between w-full" data-gsap="fade-up">

        {/* Left: CTA */}
        <div className="flex flex-col gap-3">
          <p
            className="text-white text-[24px] font-light italic leading-[1.1] tracking-[-0.04em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Have a{" "}
            <span className="font-black not-italic">project</span>
            {" "}in mind?
          </p>
          <a
            href="#contact"
            className="self-start border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Center: Facebook / Instagram — desktop only */}
        <div
          className="hidden md:block text-white text-[18px] font-normal text-center leading-[1.1] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        {/* Right: X.com / Linkedin — desktop only */}
        <div
          className="hidden md:block text-white text-[18px] font-normal text-right leading-[1.1] tracking-[-0.04em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <p>X.com</p>
          <p>Linkedin</p>
        </div>

        {/* Mobile: all 4 links stacked */}
        <div
          className="md:hidden flex flex-col gap-0"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {["Facebook", "Instagram", "X.com", "Linkedin"].map((link) => (
            <p
              key={link}
              className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.04em] uppercase"
            >
              {link}
            </p>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-white mt-6 md:mt-12" data-gsap="rule" />

      {/* ── Bottom row ── */}

      {/* DESKTOP */}
      <div className="hidden md:flex items-end justify-between w-full mt-0">

        {/* H.Studio + rotated label */}
        <div className="relative overflow-hidden" style={{ width: 1093, height: 219 }}>
          {/* Rotated "[ CODED BY CLAUDE ]" on the far left */}
          <div className="absolute left-0 top-0 flex items-center justify-center h-full w-[15px]">
            <p
              className="-rotate-90 whitespace-nowrap text-white text-[14px] uppercase leading-[1.1]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              [ Coded By Claude ]
            </p>
          </div>
          {/* Giant wordmark */}
          <p
            data-gsap="wordmark"
            className="absolute text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 290,
              letterSpacing: "-0.06em",
              bottom: -10,
              left: 20,
            }}
          >
            H.Studio
          </p>
        </div>

        {/* Legal links bottom-right */}
        <div
          className="flex gap-[34px] items-center pb-8 shrink-0"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">
            Licences
          </a>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">
            Privacy policy
          </a>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center gap-4 mt-6 pb-0">
        {/* Legal links */}
        <div
          className="flex gap-[34px] items-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">
            Licences
          </a>
          <a href="#" className="text-white text-[12px] font-normal leading-[1.1] tracking-[-0.04em] uppercase underline">
            Privacy policy
          </a>
        </div>

        {/* [ CODED BY CLAUDE ] + wordmark */}
        <div className="w-full overflow-hidden">
          <p
            className="text-white text-[10px] uppercase leading-[1.1] mb-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            [ Coded By Claude ]
          </p>
          <p
            data-gsap="wordmark"
            className="text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 91,
              letterSpacing: "-0.06em",
            }}
          >
            H.Studio
          </p>
        </div>
      </div>

    </footer>
  );
}
