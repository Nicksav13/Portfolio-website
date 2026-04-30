import Image from "next/image";

function CornerBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
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

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row md:min-h-screen">

      {/* ── Mobile header ── */}
      <div className="md:hidden flex flex-col gap-2 px-6 pt-8 pb-4">
        <span className="text-[11px] tracking-[0.2em] font-light text-black">002</span>
        <span className="text-[11px] tracking-[0.25em] font-light text-black uppercase">[ ABOUT ]</span>
      </div>

      {/* ── Left column (white) ── */}
      <div className="flex flex-col flex-1 px-6 pb-12 md:px-14 lg:px-16 md:pb-16 md:pt-10 md:justify-between">
        {/* Desktop: ABOUT label */}
        <span className="hidden md:block text-[11px] tracking-[0.25em] font-light text-black uppercase">
          [ ABOUT ]
        </span>

        {/* Text block with corner brackets */}
        <CornerBox className="px-5 py-5 md:px-7 md:py-6 max-w-sm md:max-w-md">
          <p className="text-[13px] leading-6 font-light text-black">
            Placeholder paragraph one. This is where you introduce yourself — your background,
            your passion for your craft, and what drives you creatively. Two to three sentences
            work best here.
          </p>
          <p className="mt-4 text-[13px] leading-6 font-light text-black">
            Placeholder paragraph two. Here you can describe your technical approach, how you
            collaborate with clients, or what sets your work apart from others in your field.
          </p>
        </CornerBox>
      </div>

      {/* ── Right column (portrait) ── */}
      <div className="relative w-full aspect-[3/4] md:aspect-auto md:w-[38%] md:self-stretch bg-zinc-900">
        {/* Desktop: section number */}
        <span className="hidden md:block absolute top-10 right-10 z-10 text-[11px] tracking-[0.2em] font-light text-black">
          002
        </span>

        {/*
          Replace /portrait.jpg with your own image in the /public folder.
          The image will be cropped to fill this column — works best as a
          close-up portrait shot.
        */}
        <Image
          src="/portrait.jpg"
          alt="Portrait"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
}
