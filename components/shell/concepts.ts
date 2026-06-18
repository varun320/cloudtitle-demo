/**
 * Concept registry — single source of truth used by the side-tab switcher,
 * the concept badge, and per-route metadata.
 *
 * Order matches the spec table in
 * cloud-title-website/tooling/cloud-title-demos-setup.md.
 */

export type ConceptSlug = "editorial" | "data-forward" | "premium";

export interface Concept {
  slug: ConceptSlug;
  label: string;
  shortLabel: string;
  /** Body class that picks typography + density overrides from globals.css. */
  bodyClass: `concept-${ConceptSlug}`;
  /** Two-sentence direction explainer shown in the collapsible side panel. */
  blurb: string;
  pitch: string;
}

export const concepts: ReadonlyArray<Concept> = [
  {
    slug: "editorial",
    label: "Concept A — Concierge",
    shortLabel: "Concierge",
    bodyClass: "concept-editorial",
    blurb:
      "Modern luxury real-estate brand — soft confident geometric sans, warm cream + forest accent, image-led card depth. Premium boutique service for Florida agents.",
    pitch: "Modern luxury concierge positioning.",
  },
  {
    slug: "data-forward",
    label: "Concept B — Data-forward",
    shortLabel: "Data-forward",
    bodyClass: "concept-data-forward",
    blurb:
      "Dashboard-grade confidence: stat tiles, comparison tables, mono accents on numerics. Denser information architecture; “data-driven” positioning hard-evidenced.",
    pitch: '"Data-driven" positioning hard-evidenced.',
  },
  {
    slug: "premium",
    label: "Concept C — Folio",
    shortLabel: "Folio",
    bodyClass: "concept-premium",
    blurb:
      "Archival dossier — disciplined Swiss typography, ruled tables, numbered exhibits. Reads like a high-end legal prospectus. Trust through document-grade craft.",
    pitch: "Document-grade trust through archival craft.",
  },
] as const;

export function getConcept(slug: ConceptSlug): Concept {
  const found = concepts.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown concept slug: ${slug}`);
  return found;
}
