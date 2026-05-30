"use client";
import ChocolateChipSVG from "./ChocolateChipSVG";
import RedVelvetSVG from "./RedVelvetSVG";
import CookiesAndCreamSVG from "./CookiesAndCreamSVG";

const map: Record<string, React.ComponentType> = {
  "chocolate-chip": ChocolateChipSVG,
  "red-velvet": RedVelvetSVG,
  "cookies-cream": CookiesAndCreamSVG,
};

export default function CookieSVG({ slug }: { slug: string }) {
  const Component = map[slug];
  if (!Component) return null;
  return <Component />;
}
