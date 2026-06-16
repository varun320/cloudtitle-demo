"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

interface NavProps {
  /** Concept slug — switches the logo treatment (light vs. dark hero). */
  variant?: "light" | "dark";
}

export function Nav({ variant = "light" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={styles.nav}
      data-variant={variant}
      data-scrolled={scrolled ? "true" : "false"}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Cloud Title — home">
          <Image
            src="/brand/logo.png"
            alt="Cloud Title"
            width={140}
            height={42}
            priority
            className={styles.logo}
          />
        </Link>
        <nav className={styles.links} aria-label="Primary">
          <a href="#safe-listing">Safe Listing™</a>
          <a href="#how-it-works">How it works</a>
          <a href="#proof">Proof</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#start" className={styles.cta}>
          Start Safe Listing
        </a>
      </div>
    </header>
  );
}
