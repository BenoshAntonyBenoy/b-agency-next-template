import { siteContent } from "@/data/siteContent";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className={`brand ${compact ? "brand-compact" : ""}`} aria-label={`${siteContent.brand.name} home`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-letter">{siteContent.brand.logoLetter}</span>
      </span>
      {!compact && <span className="brand-name">{siteContent.brand.name}</span>}
    </a>
  );
}
