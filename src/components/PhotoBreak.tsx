// Section 003 — full-bleed photo break
// Replace these URLs with your own hosted images once the Figma links expire (7 days)
const DESKTOP_IMG = "https://www.figma.com/api/mcp/asset/d779892b-baf1-4e32-b900-8acdae405400";
const MOBILE_IMG  = "https://www.figma.com/api/mcp/asset/a14bbdb9-bb01-445d-9754-cec64744d055";

export default function PhotoBreak() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={DESKTOP_IMG}
        alt=""
        className="hidden md:block w-full h-[900px] object-cover pointer-events-none select-none"
      />
      <img
        src={MOBILE_IMG}
        alt=""
        className="md:hidden w-full h-[565px] object-cover object-center pointer-events-none select-none"
      />
    </section>
  );
}
