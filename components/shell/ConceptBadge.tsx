/**
 * Concept-preview badge — visible at all times per project CLAUDE.md hard
 * rule #5. Manages client expectations that this is NOT the final site; the
 * real build will ship on WordPress + Divi 5.
 */
export function ConceptBadge() {
  return (
    <div role="note" aria-label="Concept preview notice" className="concept-badge">
      <span className="concept-badge__dot" aria-hidden />
      <span>
        Concept preview — final build in <strong>WordPress + Divi 5</strong>
      </span>
      <style>{`
        .concept-badge {
          /* Moved to bottom-left so it stops fighting the sticky nav.
             Hides behind the StickyCTA on mobile (StickyCTA wins at <768).  */
          position: fixed;
          inset-block-end: calc(var(--space-3) + env(safe-area-inset-bottom, 0px));
          inset-inline-start: var(--space-3);
          z-index: var(--z-sticky);
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: oklch(15% 0.04 251 / 0.92);
          backdrop-filter: blur(8px);
          color: var(--color-ink-inverse);
          border: 1px solid oklch(100% 0 0 / 0.08);
          border-radius: var(--radius-pill);
          font-size: var(--text-xs);
          font-weight: var(--weight-medium);
          letter-spacing: var(--tracking-wide);
          box-shadow: var(--shadow-md);
          opacity: 0.85;
          transition: opacity var(--duration-fast) var(--ease-standard);
        }
        .concept-badge:hover { opacity: 1; }
        @media (max-width: 767px) {
          /* Mobile: hide so the StickyCTA owns the bottom bar */
          .concept-badge { display: none; }
        }
        .concept-badge__dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: var(--color-accent);
          box-shadow: 0 0 0 3px oklch(48% 0.175 28 / 0.25);
          animation: concept-pulse 2.4s var(--ease-out-expo) infinite;
        }
        @keyframes concept-pulse {
          0%, 100% { box-shadow: 0 0 0 3px oklch(48% 0.175 28 / 0.25); }
          50%      { box-shadow: 0 0 0 6px oklch(48% 0.175 28 / 0.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .concept-badge__dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
