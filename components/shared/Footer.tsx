import Image from "next/image";
import Link from "next/link";
import { copy } from "@/content/homepage-copy";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <Link href="/" aria-label="Cloud Title — home">
            <Image
              src="/brand/logo.png"
              alt="Cloud Title"
              width={140}
              height={42}
              className={styles.logo}
            />
          </Link>
          <p className={styles.tag}>
            {copy.brand.legal} · A Florida title insurance &amp; closing agency.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Service</p>
          <ul>
            <li><a href="#safe-listing">Safe Listing™</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#proof">Proof</a></li>
            <li><a href="#start">Submit Title Order</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Company</p>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#start">Contact</a></li>
            {/* About / Privacy Notice land in the Divi build with their own routes */}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Underwriters</p>
          <ul>
            <li>Fidelity National Title</li>
            <li>First American Title</li>
          </ul>
          <p className={styles.heading} style={{ marginTop: "var(--space-5)" }}>
            Membership
          </p>
          <ul>
            <li>Florida Land Title Association</li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <p>
          © {new Date().getFullYear()} Cloud Title LLC. Licensed in all 67
          Florida counties. RESPA compliant — buyers retain full freedom to
          choose their own title company.
        </p>
        <p className={styles.demoNote}>
          Concept preview — final build in WordPress + Divi 5.
        </p>
      </div>
    </footer>
  );
}
