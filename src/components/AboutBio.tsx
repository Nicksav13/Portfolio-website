import { ReactNode } from "react";

function CornerBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 block w-3.5 h-3.5 border-t border-l border-black" />
      <span className="absolute top-0 right-0 block w-3.5 h-3.5 border-t border-r border-black" />
      <span className="absolute bottom-0 left-0 block w-3.5 h-3.5 border-b border-l border-black" />
      <span className="absolute bottom-0 right-0 block w-3.5 h-3.5 border-b border-r border-black" />
      {children}
    </div>
  );
}

export default function AboutBio() {
  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row h-[836px] md:h-[774px]">

      {/* ── Mobile header ── */}
      <div className="md:hidden flex flex-col gap-2 px-6 pt-8 pb-4">
        <span
          className="text-[11px] tracking-[0.2em] text-black"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          002
        </span>
        <span
          className="text-[11px] tracking-[0.25em] text-black uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          [ ABOUT ]
        </span>
      </div>

      {/* ── Left column (white) ── */}
      <div className="flex flex-col flex-1 px-6 pb-12 md:px-14 lg:px-16 md:pb-16 md:pt-10 md:justify-between">

        {/* Desktop top row: [ ABOUT ] ........ 002 */}
        <div className="hidden md:flex items-start justify-between">
          <span
            className="text-[11px] tracking-[0.25em] text-black uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            [ ABOUT ]
          </span>
          <span
            className="text-[11px] tracking-[0.2em] text-black"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            002
          </span>
        </div>

        {/* Text block — pushed to the bottom on desktop */}
        <CornerBox className="px-5 py-5 md:px-7 md:py-6 max-w-sm md:max-w-md">
          <p
            className="text-[13px] leading-6 font-light text-black"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Placeholder paragraph one. This is where you introduce yourself —
            your background, your passion for your craft, and what drives you
            creatively. Two to three sentences work best here.
          </p>
          <p
            className="mt-4 text-[13px] leading-6 font-light text-black"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Placeholder paragraph two. Here you can describe your technical
            approach, how you collaborate with clients, or what sets your work
            apart from others in your field.
          </p>
        </CornerBox>
      </div>

      {/* ── Right column (portrait) ── */}
      <div className="relative w-full aspect-[3/4] md:aspect-auto md:w-[38%] md:self-stretch overflow-hidden">
        <img
          src="https://www.figma.com/api/mcp/asset/8749e5ef-bf42-4733-a91f-0fe16a27255a"
          alt="Portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
}
