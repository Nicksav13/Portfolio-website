import type { Service } from "@/sanity/types";
import { urlFor } from "@/sanity/image";

// Static fallback data (shown while Sanity is empty)
const STATIC_SERVICES = [
  {
    _id: "1", number: "[ 1 ]", title: "Brand Discovery",
    description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    imgDesktop: "https://www.figma.com/api/mcp/asset/5bb41051-4901-497a-83c1-54a408618c3f",
    imgMobile:  "https://www.figma.com/api/mcp/asset/12b81bf6-3191-4e61-aca0-915c2db6f383",
  },
  {
    _id: "2", number: "[ 2 ]", title: "Web Design & Dev",
    description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    imgDesktop: "https://www.figma.com/api/mcp/asset/49e03613-f5c1-4763-b25e-2c3b27dafc08",
    imgMobile:  "https://www.figma.com/api/mcp/asset/8cf7caba-2216-4031-b96b-73110b9595ac",
  },
  {
    _id: "3", number: "[ 3 ]", title: "Marketing",
    description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    imgDesktop: "https://www.figma.com/api/mcp/asset/2d71a7b0-8445-44ed-a2d0-f04c40b6ae28",
    imgMobile:  "https://www.figma.com/api/mcp/asset/fa94d3bc-0032-4496-8af8-8e202d1f822e",
  },
  {
    _id: "4", number: "[ 4 ]", title: "Photography",
    description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    imgDesktop: "https://www.figma.com/api/mcp/asset/f96d5a0b-0075-4794-a714-a1e61aa4dc48",
    imgMobile:  "https://www.figma.com/api/mcp/asset/cdf15e72-21b2-47c9-aabb-140d4ce91ac9",
  },
];

export default function ServicesSection({ services }: { services?: Service[] }) {
  const hasSanity = services && services.length > 0;

  return (
    <section className="w-full bg-black px-4 py-12 md:px-8 md:py-20">

      <p data-gsap="fade-up" className="text-white text-[14px] leading-[1.1] uppercase mb-12" style={{ fontFamily: "var(--font-mono)" }}>
        [ services ]
      </p>

      <div data-gsap="fade-up" className="flex items-center justify-between w-full mb-12" style={{ fontFamily: "var(--font-inter)" }}>
        <span className="text-white font-light text-[32px] md:text-[96px] tracking-[-0.08em] uppercase leading-none">
          [{hasSanity ? services!.length : 4}]
        </span>
        <span className="text-white font-light text-[32px] md:text-[96px] tracking-[-0.08em] uppercase leading-none">
          Deliverables
        </span>
      </div>

      <div className="flex flex-col gap-12">
        {hasSanity
          ? services!.map((s) => {
              const imgDesktopUrl = s.imageDesktop ? urlFor(s.imageDesktop).width(302).height(302).url() : "";
              const imgMobileUrl  = s.imageMobile  ? urlFor(s.imageMobile).width(302).height(302).url()  : imgDesktopUrl;
              return (
                <div key={s._id} className="flex flex-col gap-[9px] w-full" data-gsap="service-row">
                  <p className="text-white text-[14px] leading-[1.1] uppercase" style={{ fontFamily: "var(--font-mono)" }}>{s.number}</p>
                  <div className="w-full h-px bg-white" data-gsap="rule" />
                  <div className="hidden md:flex items-start justify-between w-full pt-2">
                    <p className="text-white text-[36px] font-bold italic leading-[1.1] tracking-[-0.04em] uppercase shrink-0" style={{ fontFamily: "var(--font-inter)" }}>{s.title}</p>
                    <div className="flex items-start gap-6 shrink-0">
                      <p className="text-white text-[14px] font-normal leading-[1.3] tracking-[-0.04em] w-[393px]" style={{ fontFamily: "var(--font-inter)" }}>{s.description}</p>
                      <div className="shrink-0 w-[151px] h-[151px] overflow-hidden rounded-sm">
                        <img src={imgDesktopUrl} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="md:hidden flex flex-col gap-4 pt-2">
                    <p className="text-white text-[36px] font-bold italic leading-[1.1] tracking-[-0.04em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>{s.title}</p>
                    <p className="text-white text-[14px] font-normal leading-[1.3] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>{s.description}</p>
                    <div className="w-[151px] h-[151px] overflow-hidden rounded-sm">
                      <img src={imgMobileUrl} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              );
            })
          : STATIC_SERVICES.map((s) => (
              <div key={s._id} className="flex flex-col gap-[9px] w-full" data-gsap="service-row">
                <p className="text-white text-[14px] leading-[1.1] uppercase" style={{ fontFamily: "var(--font-mono)" }}>{s.number}</p>
                <div className="w-full h-px bg-white" data-gsap="rule" />
                <div className="hidden md:flex items-start justify-between w-full pt-2">
                  <p className="text-white text-[36px] font-bold italic leading-[1.1] tracking-[-0.04em] uppercase shrink-0" style={{ fontFamily: "var(--font-inter)" }}>{s.title}</p>
                  <div className="flex items-start gap-6 shrink-0">
                    <p className="text-white text-[14px] font-normal leading-[1.3] tracking-[-0.04em] w-[393px]" style={{ fontFamily: "var(--font-inter)" }}>{s.description}</p>
                    <div className="shrink-0 w-[151px] h-[151px] overflow-hidden rounded-sm">
                      <img src={s.imgDesktop} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col gap-4 pt-2">
                  <p className="text-white text-[36px] font-bold italic leading-[1.1] tracking-[-0.04em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>{s.title}</p>
                  <p className="text-white text-[14px] font-normal leading-[1.3] tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter)" }}>{s.description}</p>
                  <div className="w-[151px] h-[151px] overflow-hidden rounded-sm">
                    <img src={s.imgMobile} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
