"use client";

import { useEffect, useState } from "react";
import { copy } from "@/content/homepage-copy";
import styles from "./StickyCTA.module.css";

/** Floating mobile-only CTA — appears after the user scrolls past the hero. */
export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.bar} data-show={show ? "true" : "false"} aria-hidden={!show}>
      <a href={copy.stickyCta.href} className={styles.cta}>
        {copy.stickyCta.label}
      </a>
    </div>
  );
}
