export const FONT_OPTIONS = [
  { id: "Fraunces", label: "Fraunces (atual)", href: "Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700" },
  { id: "Playfair Display", label: "Playfair Display", href: "Playfair+Display:ital,wght@0,400..700;1,400..700" },
  { id: "Libre Baskerville", label: "Libre Baskerville", href: "Libre+Baskerville:ital,wght@0,400;0,700;1,400" },
  { id: "Source Serif 4", label: "Source Serif 4", href: "Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900" },
  { id: "Geist", label: "Geist (atual corpo)", href: "" },
  { id: "DM Sans", label: "DM Sans", href: "DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000" },
  { id: "Manrope", label: "Manrope", href: "Manrope:wght@200..800" },
  { id: "IBM Plex Sans", label: "IBM Plex Sans", href: "IBM+Plex+Sans:ital,wght@0,100..700;1,100..700" },
  { id: "Source Sans 3", label: "Source Sans 3", href: "Source+Sans+3:ital,wght@0,200..900;1,200..900" },
] as const;

export function googleFontsHref(display: string, sans: string) {
  const families = [display, sans]
    .map((name) => FONT_OPTIONS.find((f) => f.id === name))
    .filter((f): f is (typeof FONT_OPTIONS)[number] => Boolean(f?.href))
    .map((f) => `family=${f.href}`);
  if (!families.length) return null;
  return `https://fonts.googleapis.com/css2?${families.join("&")}&display=swap`;
}
