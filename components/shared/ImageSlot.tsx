import Image from "next/image";
import { ImageIcon } from "lucide-react";
import styles from "./ImageSlot.module.css";

interface ImageSlotProps {
  /** Aspect ratio of the slot — e.g. "16/9", "4/3", "1/1", "3/4". */
  ratio?: string;
  /** Tone — "light" sits on bone surfaces, "dark" sits on navy. */
  tone?: "light" | "dark";
  /** One-line description of the imagery this slot expects. */
  caption: string;
  /** Higgsfield prompt brief — exact prompt used to generate the asset. */
  prompt: string;
  /** Optional caption-side accent ("hero", "supporting", "portrait", "process"). */
  kind?: "hero" | "supporting" | "portrait" | "process";
  /** Optional ID for skip-to-content / anchors. */
  id?: string;
  className?: string;
  /**
   * Image src. When provided, the slot renders a real `next/image` using
   * `fill`. When omitted, the slot falls back to the diagonal-stripe
   * placeholder with the inline Higgsfield prompt visible.
   */
  src?: string;
  /** Alt text for the rendered image. Falls back to `caption` when missing. */
  alt?: string;
  /** Object-position fine-tuning (e.g. "center top", "20% 40%"). */
  objectPosition?: string;
  /** Whether the image is above the fold — preloads via `priority`. */
  priority?: boolean;
}

export function ImageSlot({
  ratio = "16/9",
  tone = "light",
  caption,
  prompt,
  kind = "supporting",
  id,
  className,
  src,
  alt,
  objectPosition,
  priority = false,
}: ImageSlotProps) {
  return (
    <figure
      id={id}
      data-tone={tone}
      data-kind={kind}
      data-has-src={src ? "true" : "false"}
      className={`${styles.slot} ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? caption}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 70vw, 100vw"
          className={styles.image}
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <>
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
        </>
      )}
    </figure>
  );
}
