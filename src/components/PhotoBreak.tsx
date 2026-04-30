import type { SiteConfig } from "@/sanity/types";
import { urlFor } from "@/sanity/image";

const STATIC_DESKTOP = "https://www.figma.com/api/mcp/asset/d779892b-baf1-4e32-b900-8acdae405400";
const STATIC_MOBILE  = "https://www.figma.com/api/mcp/asset/a14bbdb9-bb01-445d-9754-cec64744d055";

export default function PhotoBreak({ config }: { config?: SiteConfig }) {
  const desktopSrc = config?.photoBreakDesktop
    ? urlFor(config.photoBreakDesktop).width(1440).url()
    : STATIC_DESKTOP;
  const mobileSrc = config?.photoBreakMobile
    ? urlFor(config.photoBreakMobile).width(800).url()
    : STATIC_MOBILE;

  return (
    <section className="w-full overflow-hidden">
      <img
        src={desktopSrc}
        alt=""
        className="hidden md:block w-full h-[900px] object-cover pointer-events-none select-none"
      />
      <img
        src={mobileSrc}
        alt=""
        className="md:hidden w-full h-[565px] object-cover object-center pointer-events-none select-none"
      />
    </section>
  );
}
