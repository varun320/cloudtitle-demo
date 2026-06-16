"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { concepts, type ConceptSlug } from "./concepts";
import styles from "./SideTabSwitcher.module.css";

/**
 * Horizontal concept switcher — three pill links docked to the top edge of
 * the viewport, just below the nav. Route-based so each concept stays
 * shareable. No drawer, no descriptions — comparison is the whole point of
 * the demo, so the chips just sit there.
 */
export function SideTabSwitcher() {
  const pathname = usePathname();
  const activeSlug = deriveActiveSlug(pathname);

  return (
    <nav
      className={styles.strip}
      aria-label="Homepage concept switcher"
    >
      {concepts.map((c) => {
        const active = c.slug === activeSlug;
        return (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className={styles.chip}
            data-active={active ? "true" : "false"}
            aria-current={active ? "page" : undefined}
          >
            {c.shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}

function deriveActiveSlug(pathname: string): ConceptSlug | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "editorial" || seg === "data-forward" || seg === "premium") {
    return seg;
  }
  return null;
}
