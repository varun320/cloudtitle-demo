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
    label: "Concept A — Editorial",
    shortLabel: "Editorial",
    bodyClass: "concept-editorial",
    blurb:
      "Magazine-style hierarchy with intentional asymmetry, large pull-quotes, and serif display type. Generous whitespace; brand authority through storytelling.",
    pitch: "Brand authority and storytelling.",
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
    label: "Concept C — Premium minimal",
    shortLabel: "Premium",
    bodyClass: "concept-premium",
    blurb:
      "Restrained luxury — monochromatic with a single accent, maximum whitespace, oversized type, almost no motion. Florida-closing positioning at the premium ceiling.",
    pitch: "Florida luxury closing positioning.",
  },
] as const;

export function getConcept(slug: ConceptSlug): Concept {
  const found = concepts.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown concept slug: ${slug}`);
  return found;
}
