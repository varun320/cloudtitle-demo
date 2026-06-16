import { ImageIcon } from "lucide-react";
import styles from "./ImageSlot.module.css";

interface ImageSlotProps {
  /** Aspect ratio of the slot — e.g. "16/9", "4/3", "1/1", "3/4". */
  ratio?: string;
  /** Tone — "light" sits on bone surfaces, "dark" sits on navy. */
  tone?: "light" | "dark";
  /** One-line description of the imagery this slot expects. */
  caption: string;
  /** Higgsfield prompt brief — exact prompt to pass to image generation. */
  prompt: string;
  /** Optional caption-side accent ("hero", "supporting", "portrait", "process"). */
  kind?: "hero" | "supporting" | "portrait" | "process";
  /** Optional ID for skip-to-content / anchors. */
  id?: string;
  className?: string;
}

/**
 * Placeholder slot for imagery that will be generated via Higgsfield in a
 * later pass. Renders the prompt inline so Thomas / Mohammad / the image
 * operator can see exactly what's intended without leaving the page.
 *
 * After Higgsfield generation, swap this component for `<Image>` from
 * `next/image` with explicit width/height.
 */
export function ImageSlot({
  ratio = "16/9",
  tone = "light",
  caption,
  prompt,
  kind = "supporting",
  id,
  className,
}: ImageSlotProps) {
  return (
    <figure
      id={id}
      data-tone={tone}
      data-kind={kind}
      className={`${styles.slot} ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
    >
      <div className={styles.frame} aria-hidden>
        <ImageIcon size={28} strokeWidth={1.25} />
      </div>
      <figcaption className={styles.meta}>
        <p className={styles.kind}>Image · {kind}</p>
        <p className={styles.caption}>{caption}</p>
        <details className={styles.details}>
          <summary>Higgsfield prompt</summary>
          <p className={styles.prompt}>{prompt}</p>
        </details>
      </figcaption>
    </figure>
  );
}
