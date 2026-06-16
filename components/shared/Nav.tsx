"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Nav.module.css";

interface NavProps {
  /** Concept slug — switches the logo treatment (light vs. dark hero). */
  variant?: "light" | "dark";
}

const links = [
  { href: "#safe-listing", label: "Safe Listing™" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#proof", label: "Proof" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ variant = "light" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={styles.nav}
      data-variant={variant}
      data-scrolled={scrolled ? "true" : "false"}
      data-menu-open={open ? "true" : "false"}
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
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#start" className={styles.cta}>
          Start<span className={styles.ctaWide}>&nbsp;Safe Listing</span>
        </a>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={styles.mobilePanel}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className={styles.mobileLinks}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#start"
          onClick={() => setOpen(false)}
          className={styles.mobileCta}
          tabIndex={open ? 0 : -1}
        >
          Start Safe Listing
        </a>
      </div>
    </header>
  );
}
