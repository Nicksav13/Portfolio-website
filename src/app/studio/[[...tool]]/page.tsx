"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(
  () =>
    import("../../../../sanity.config").then(async (cfg) => {
      const { NextStudio } = await import("next-sanity/studio");
      return function StudioComp() {
        return <NextStudio config={cfg.default} />;
      };
    }),
  { ssr: false }
);

export { viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
