import { copy } from "@/content/homepage-copy";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";
import { ImageSlot } from "@/components/shared/ImageSlot";
import s from "./editorial.module.css";

/** Render H1 using structured `h1Parts` so the copy stays in homepage-copy.ts
 * (verbatim rule) while the Concierge concept can still add typographic
 * emphasis to specific spans — the verb phrase reads slightly lighter and
 * the year gets the forest accent. */
function HeroH1() {
  return (
    <h1 className={s.heroH1}>
      {copy.hero.h1Parts.map((part, i) => {
        if ("emphasis" in part && part.emphasis === "italic") {
          return (
            <span key={i} className={s.heroH1Soft}>
              {part.text}
            </span>
          );
        }
        if ("emphasis" in part && part.emphasis === "year") {
          return (
            <span key={i} className={s.heroH1Year}>
              {part.text}
            </span>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </h1>
  );
}

/** Inline check mark in the Concierge accent. Pure CSS via a styled span,
 * no SVG, keeps the surface calm. */
function CheckMark() {
  return <span className={s.check} aria-hidden="true" />;
}

/**
 * Concept A — Concierge.
 *
 * Modern luxury real-estate brand. Compass × Pacaso × Side × Aman digital.
 * Six sections that each show a distinct treatment of premium-boutique
 * positioning for Florida agents:
 *
 *   1. HERO          Cover anchor + service strip
 *   2. REALITY       Pattern interrupt + Safe Listing benefit card grid
 *   3. HOW           Old way vs Safe Listing way comparison cards
 *   4. PROOF         Team portrait + feature testimonial + 2 mini cases
 *   5. INCLUDED      What you get — 3 card columns + invest strip
 *   6. BEGIN         Concierge intake card + reassurance card
 */
export function EditorialPage() {
  const benefits = copy.safeListing.benefits;
  const oldSteps = copy.howItWorks.oldWay.steps.slice(0, 4);
  const safeSteps = copy.howItWorks.safeWay.steps.slice(0, 4);
  const testimonial = copy.socialProof.testimonials[0];
  const caseA = copy.caseStudies.cases[0];
  const caseB = copy.caseStudies.cases[1];
  const intake = copy.finalCta.options[0];

  return (
    <>
      <Nav />
      <main id="main" className={s.main}>

        {/* 1 — HERO */}
        <section className={s.hero} aria-labelledby="hero-h1">
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <p className={s.eyebrow}>{copy.hero.eyebrow}</p>
              <div id="hero-h1">
                <HeroH1 />
              </div>
              <p className={s.heroSub}>{copy.hero.sub}</p>
              <div className={s.heroCtaRow}>
                <a href="#start" className={s.btnPrimary}>{copy.hero.primaryCta}</a>
                <a href="#demo" className={s.btnGhost}>{copy.hero.secondaryCta}</a>
              </div>
            </div>

            <figure className={s.heroPlate}>
              <div className={s.heroImage}>
                <ImageSlot
                  src="/assets/A1.png"
                  alt="Mid-century Sarasota School modernist home detail — concrete soffit meeting floor-to-ceiling glass under hard noon Florida light"
                  priority
                  kind="hero"
                  ratio="4/5"
                  caption="Coastal architecture, Sarasota"
                  prompt={`Architectural detail photograph of a mid-century Sarasota School modernist home in coastal Florida — concrete soffit and floor-to-ceiling glass meeting, hard noon light casting sharp diagonal shadows, slightly bleached high-key palette, no people, no foliage, no palms, no beach. Editorial magazine photography, Hasselblad medium format, f/8, natural daylight only.`}
                />
              </div>
              <figcaption className={s.imageCaption}>Coastal architecture, Sarasota</figcaption>
            </figure>
          </div>

          <ul className={s.serviceStrip} aria-label="At a glance">
            <li className={s.serviceCard}>
              <span className={s.serviceLabel}>Underwritten by</span>
              <span className={s.serviceValue}>Fidelity &amp; First American</span>
            </li>
            <li className={s.serviceCard}>
              <span className={s.serviceLabel}>Florida-agent rating</span>
              <span className={s.serviceValueAccent}>4.9 / 5</span>
              <span className={s.serviceFoot}>Based on internal averages</span>
            </li>
            <li className={s.serviceCard}>
              <span className={s.serviceLabel}>Closed in 2025</span>
              <span className={s.serviceValueAccent}>$127M+</span>
              <span className={s.serviceFoot}>Based on internal averages</span>
            </li>
          </ul>
        </section>

        {/* 2 — REALITY + Safe Listing introduction */}
        <section className={s.section} data-surface="sand" id="why">
          <div className={s.realityGrid}>
            <div className={s.realityProse}>
              <p className={s.eyebrowAccent}>The reality</p>
              <h2 className={s.sectionH2}>{copy.patternInterrupt.h2}</h2>
              <p className={s.lead}>{copy.patternInterrupt.body[0]}</p>
              <p className={s.body}>{copy.patternInterrupt.body[8]}</p>
              <blockquote className={s.pullQuote}>
                {copy.patternInterrupt.body[6]}
              </blockquote>
            </div>

            <figure className={s.realityPlate}>
              <div className={s.realityImage}>
                <ImageSlot
                  src="/assets/A2.png"
                  alt="Aerial straight-down view of a Florida coastal causeway meeting the ocean — pure geometric line of white concrete and blue-grey water"
                  ratio="4/5"
                  tone="light"
                  kind="supporting"
                  caption="Causeway, Gulf Coast"
                  prompt={`Aerial straight-down photograph of a Florida coastal causeway and the geometric line where land meets ocean — pure geometry, no boats, no people, no palms. High-key bleached light, blue-grey water, white concrete causeway, sandbars visible. Editorial aerial photography, Phase One IQ4 from low altitude, no decoration.`}
                />
              </div>
              <figcaption className={s.imageCaption}>Causeway, Gulf Coast</figcaption>
            </figure>
          </div>

          <div className={s.benefitIntro} id="safe-listing">
            <h3 className={s.sectionH3}>{copy.safeListing.h2}</h3>
            <p className={s.bodyMuted}>{copy.safeListing.sub}</p>
          </div>

          <ul className={s.benefitGrid}>
            {benefits.map((b) => (
              <li key={b} className={s.benefitCard}>
                <CheckMark />
                <span className={s.benefitText}>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3 — HOW IT WORKS */}
        <section className={s.section} data-surface="bone" id="how">
          <div className={s.sectionHead}>
            <p className={s.eyebrowAccent}>How it works</p>
            <h2 className={s.sectionH2}>{copy.howItWorks.h2}</h2>
          </div>

          <div className={s.howGrid}>
            <article className={s.howCard} data-tone="quiet">
              <p className={s.howLabel}>{copy.howItWorks.oldWay.label}</p>
              <ol className={s.howList}>
                {oldSteps.map((step) => (
                  <li key={step} className={s.howStep}>
                    <span className={s.howDotQuiet} aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className={s.howResult}>{copy.howItWorks.oldWay.result}</p>
            </article>

            <article className={s.howCard} data-tone="accent">
              <p className={s.howLabelAccent}>{copy.howItWorks.safeWay.label}</p>
              <ol className={s.howList}>
                {safeSteps.map((step) => (
                  <li key={step} className={s.howStep}>
                    <CheckMark />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className={s.howResultAccent}>{copy.howItWorks.safeWay.result}</p>
            </article>
          </div>

          <div className={s.howCtaRow}>
            <a href="#start" className={s.btnPrimary}>{copy.howItWorks.cta}</a>
          </div>
        </section>

        {/* 4 — PROOF */}
        <section className={s.section} data-surface="sand" id="proof">
          <figure className={s.proofPlate}>
            <div className={s.proofImage}>
              <ImageSlot
                src="/assets/A3.png"
                alt="Three Florida title professionals inside a modern glass-fronted Tampa office — environmental portrait, mid-morning sidelight, neutral expressions"
                ratio="16/9"
                tone="dark"
                kind="portrait"
                caption="The team, Tampa office"
                prompt={`Editorial environmental portrait of a small Florida title agency team of 3 — two women, one man, mixed ages 35–55, business casual real Florida professionals (not stock types), inside a modern glass-fronted Tampa office, mid-morning sidelight, documents and a laptop on a wood table, neutral expressions, looking off-camera. Leica Q, natural daylight, shallow depth, no posed handshakes.`}
              />
            </div>
            <figcaption className={s.imageCaption}>The team, Tampa office</figcaption>
          </figure>

          <div className={s.proofGrid}>
            <div className={s.proofProse}>
              <p className={s.eyebrowAccent}>The proof</p>
              <h2 className={s.sectionH2}>{copy.socialProof.h2}</h2>
              <p className={s.bodyMuted}>{copy.socialProof.intro}</p>
            </div>

            <article className={s.testimonialCard}>
              <p className={s.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <p className={s.testimonialName}>{testimonial.name}</p>
              <p className={s.testimonialRole}>{testimonial.role}</p>
            </article>
          </div>

          <div className={s.caseGrid}>
            <article className={s.caseCard}>
              <p className={s.caseProperty}>{caseA.property}</p>
              <p className={s.caseResult}>{caseA.result}</p>
            </article>
            <article className={s.caseCard}>
              <p className={s.caseProperty}>{caseB.property}</p>
              <p className={s.caseResult}>{caseB.result}</p>
            </article>
          </div>
        </section>

        {/* 5 — INCLUDED (the offer) */}
        <section className={s.offerSection} data-surface="bone" id="included">
          <div className={s.sectionHead}>
            <p className={s.eyebrowAccent}>What you get</p>
            <h2 className={s.sectionH2}>{copy.included.h2}</h2>
          </div>

          <div className={s.includedGrid}>
            {copy.included.groups.map((group) => (
              <article key={group.label} className={s.includedCard}>
                <p className={s.includedLabel}>{group.label}</p>
                <ul className={s.includedList}>
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item} className={s.includedItem}>
                      <CheckMark />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={s.investStrip}>
            <div className={s.investCell}>
              <span className={s.investLabel}>Total value</span>
              <span className={s.investValue}>{copy.included.totalValue}</span>
            </div>
            <div className={s.investCell}>
              <span className={s.investLabel}>If your listing sells</span>
              <span className={s.investValue}>{copy.included.ifSells}</span>
            </div>
            <div className={s.investCell} data-accent>
              <span className={s.investLabel}>If it doesn&rsquo;t sell</span>
              <span className={s.investValueAccent}>{copy.included.ifNotSells}</span>
            </div>
          </div>

          <div className={s.offerCtaRow}>
            <a href="#start" className={s.btnPrimary}>{copy.included.cta}</a>
          </div>
        </section>

        {/* 6 — BEGIN */}
        <section className={s.section} data-surface="sand" id="start">
          <div className={s.sectionHead}>
            <p className={s.eyebrowAccent}>Begin</p>
            <h2 className={s.sectionH2}>{copy.finalCta.h2}</h2>
          </div>

          <div className={s.beginGrid}>
            <DemoForm className={s.intakeCard}>
              <p className={s.intakeLabel}>{intake.label}</p>
              <div className={s.intakeFields}>
                {intake.fields?.map((f) => (
                  <label key={f} className={s.field}>
                    <span>{f}</span>
                    <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                  </label>
                ))}
              </div>
              <button type="submit" className={s.btnPrimary}>
                {intake.cta}
              </button>
              {intake.supporting ? (
                <p className={s.intakeSupport}>{intake.supporting}</p>
              ) : null}
            </DemoForm>

            <aside className={s.reassuranceCard} aria-label="Why agents choose Cloud Title">
              <p className={s.reassuranceLabel}>Why agents choose us</p>
              <ul className={s.reassuranceList}>
                <li className={s.reassuranceItem}>
                  <CheckMark />
                  <span>Zero cost if your listing doesn&rsquo;t sell</span>
                </li>
                <li className={s.reassuranceItem}>
                  <CheckMark />
                  <span>Underwritten by Fidelity &amp; First American</span>
                </li>
                <li className={s.reassuranceItem}>
                  <CheckMark />
                  <span>Rated 4.9 / 5 by Florida agents</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
