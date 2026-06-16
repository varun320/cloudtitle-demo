import { type ConceptSlug, getConcept } from "./concepts";

/**
 * Wraps each concept page. Sets the `.concept-*` body class via a
 * suppressHydrationWarning-friendly div, so typography + density overrides
 * in globals.css apply only to that page.
 *
 * The actual body-class swap happens via the data-attribute on the wrapper
 * div rather than touching <body> directly — avoids hydration mismatches
 * across routes that share the root layout.
 */
export function ConceptShell({
  slug,
  children,
}: {
  slug: ConceptSlug;
  children: React.ReactNode;
}) {
  const c = getConcept(slug);
  return (
    <div className={c.bodyClass} data-concept={slug}>
      {children}
    </div>
  );
}
