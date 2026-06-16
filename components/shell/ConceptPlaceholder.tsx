import { type ConceptSlug, getConcept } from "./concepts";
import { copy } from "@/content/homepage-copy";

/**
 * Temporary scaffold-level placeholder used in Phase 3.
 * Replaced section-by-section in Phases 4–6 as each concept is built.
 *
 * Renders enough of the hero to verify:
 *   - Concept body class is applying typography pairing
 *   - Verbatim copy imports correctly
 *   - Side-tab switcher overlays cleanly
 */
export function ConceptPlaceholder({ slug }: { slug: ConceptSlug }) {
  const c = getConcept(slug);
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1
            style={{
              fontSize: "var(--text-hero)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-tight)",
              marginBlock: "var(--space-5) var(--space-6)",
            }}
          >
            {copy.hero.h1}
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-ink-muted)",
              maxWidth: "var(--width-content-prose)",
              marginBottom: "var(--space-7)",
            }}
          >
            {copy.hero.sub}
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <a
              href="#start"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "var(--space-4) var(--space-6)",
                background: "var(--color-brand)",
                color: "var(--color-ink-inverse)",
                borderRadius: "var(--radius-md)",
                fontWeight: "var(--weight-semibold)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {copy.hero.primaryCta}
            </a>
            <a
              href="#demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "var(--space-4) var(--space-6)",
                border: "1px solid var(--color-border-strong)",
                borderRadius: "var(--radius-md)",
                fontWeight: "var(--weight-semibold)",
              }}
            >
              {copy.hero.secondaryCta}
            </a>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBlockStart: "var(--space-8)",
              display: "flex",
              gap: "var(--space-6)",
              flexWrap: "wrap",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-muted)",
            }}
          >
            {copy.hero.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bone-100)" }}>
        <div className="container">
          <p className="eyebrow">Concept scaffold — {c.shortLabel}</p>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              marginBlock: "var(--space-3) var(--space-4)",
            }}
          >
            Section work begins in Phase {slug === "editorial" ? 4 : slug === "data-forward" ? 5 : 6}.
          </h2>
          <p style={{ color: "var(--color-ink-muted)", maxWidth: "var(--width-content-prose)" }}>
            {c.blurb} Verbatim copy is already wired into <code>content/homepage-copy.ts</code>;
            each section gets built per the playbook in <code>references/analysis.md</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
