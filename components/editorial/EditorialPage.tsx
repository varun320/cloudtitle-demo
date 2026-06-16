import { copy } from "@/content/homepage-copy";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";
import { ImageSlot } from "@/components/shared/ImageSlot";
import { Star } from "lucide-react";
import s from "./editorial.module.css";

/** Render H1 using structured `h1Parts` so the copy stays in homepage-copy.ts
 * (verbatim rule) while the editorial concept can still add typographic
 * emphasis to specific spans. */
function HeroH1() {
  return (
    <h1 className={s.heroH1}>
      {copy.hero.h1Parts.map((part, i) => {
        if ("emphasis" in part && part.emphasis === "italic") {
          return (
            <em key={i} className={s.heroEm}>
              {part.text}
            </em>
          );
        }
        if ("emphasis" in part && part.emphasis === "year") {
          return (
            <span key={i} className={s.heroYear}>
              {part.text}
            </span>
          );
        }
        return <span key={i}>{part.text}</span>;
      })}
    </h1>
  );
}

/**
 * Concept A — Editorial.
 *
 * Direction (per references/analysis.md):
 *   ONE Sotheby's editorial register × Side's single declarative hero ×
 *   The Boca Raton's heritage-as-type.
 *
 * Typography: Fraunces serif display + Raleway body (set via .concept-editorial
 * in styles/globals.css). Layout: magazine asymmetry, large pull-quotes,
 * generous whitespace. Single accent (--color-accent / maroon) used sparingly.
 */
export function EditorialPage() {
  return (
    <>
      <Nav />
      <main id="main" className={s.main}>

        {/* SECTION 1 — HERO */}
        <section className={s.hero}>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <p className={s.eyebrow}>{copy.hero.eyebrow}</p>
              <HeroH1 />
              <p className={s.heroSub}>{copy.hero.sub}</p>
              <div className={s.ctaRow}>
                <a href="#start" className={s.btnPrimary}>{copy.hero.primaryCta}</a>
                <a href="#demo" className={s.btnGhost}>{copy.hero.secondaryCta} →</a>
              </div>
            </div>
            <aside className={s.heroAside} aria-label="Founding note">
              <p className={s.asideStamp}>EST.</p>
              <p className={s.asideYear}>MMXXIV</p>
              <p className={s.asideLine}>Florida-licensed,<br/>67 counties served.</p>
              <div className={s.heroAsideImage}>
                <ImageSlot
                  kind="hero"
                  ratio="3/4"
                  caption="Florida architecture detail — concrete + glass, hard noon light"
                  prompt={`Architectural detail photograph of a mid-century Sarasota School modernist home in coastal Florida — concrete soffit and floor-to-ceiling glass meeting, hard noon light casting sharp diagonal shadows, slightly bleached high-key palette, no people, no foliage, no palms, no beach. Editorial magazine photography, Hasselblad medium format, f/8, natural daylight only.`}
                />
              </div>
            </aside>
          </div>

          {/* Above-the-fold trust trio — non-negotiable per analysis.md */}
          <aside className={s.trustTrio} aria-label="Trust signals">
            <div className={s.trustTile}>
              <p className={s.trustEyebrow}>Underwritten by</p>
              <p className={s.trustUnderwriters}>
                <span>Fidelity National Title</span>
                <span aria-hidden>·</span>
                <span>First American Title</span>
              </p>
            </div>
            <div className={s.trustTile}>
              <p className={s.trustEyebrow}>Florida-agent rating</p>
              <p className={s.trustValue}>
                <Star size={16} className={s.starIcon} aria-hidden />
                4.9 <span className={s.trustValueSub}>/ 5</span>
              </p>
              <p className={s.trustFoot}>Based on internal averages</p>
            </div>
            <div className={s.trustTile}>
              <p className={s.trustEyebrow}>Closed in 2025</p>
              <p className={s.trustValueHero}>$127M+</p>
              <p className={s.trustFoot}>Based on internal averages</p>
            </div>
          </aside>
        </section>

        {/* SECTION 2 — PATTERN INTERRUPT */}
        <section className={s.interrupt} id="why">
          <div className={s.interruptInner}>
            <p className={s.interruptKicker}>The reality of 2025</p>
            <h2 className={s.interruptH2}>{copy.patternInterrupt.h2}</h2>
            <div className={s.interruptBody}>
              <p className={s.interruptLead}>Last month, a <strong>$2.1M deal</strong> collapsed at day 28.</p>
              <p className={s.interruptQ}>The reason?</p>
              <p>A judgment lien from years ago that no one discovered until after contract.</p>
              <ul className={s.interruptLosses}>
                <li>The agent lost the commission.</li>
                <li>The seller lost their next purchase.</li>
                <li>The buyer walked away.</li>
              </ul>
              <p className={s.interruptPunch}>One proactive title search could have prevented all of it.</p>
              <p className={s.interruptQ}>The truth?</p>
              <p className={s.interruptCoda}>
                Most title companies only look for problems <em>after</em> you already have a contract. By then, it’s too late.
              </p>
            </div>
            <a href="#safe-listing" className={s.btnLink}>{copy.patternInterrupt.cta} →</a>
          </div>
        </section>

        {/* SECTION 3 — INTRODUCING SAFE LISTING */}
        <section id="safe-listing" className={s.section}>
          <div className={s.sectionGrid}>
            <div className={s.colNarrow}>
              <p className={s.eyebrow}>The system</p>
              <h2 className={s.h2}>{copy.safeListing.h2}</h2>
            </div>
            <div className={s.colWide}>
              <p className={s.lead}>{copy.safeListing.sub}</p>
              <ul className={s.benefitList}>
                {copy.safeListing.benefits.map((b) => (
                  <li key={b}><span className={s.tick}>✓</span><span>{b}</span></li>
                ))}
              </ul>
              {copy.safeListing.supporting.map((p) => (
                <p key={p} className={s.support}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE BAND — between Safe Listing and How It Works (chapter break) */}
        <div className={s.imageBand}>
          <ImageSlot
            ratio="21/9"
            tone="light"
            kind="supporting"
            caption="Florida coastline geometry — causeway from above, no boats"
            prompt={`Aerial straight-down photograph of a Florida coastal causeway and the geometric line where land meets ocean — pure geometry, no boats, no people, no palms. High-key bleached light, blue-grey water, white concrete causeway, sandbars visible. Editorial aerial photography, Phase One IQ4 from low altitude, no decoration.`}
          />
        </div>

        {/* SECTION 4 — HOW IT WORKS */}
        <section id="how-it-works" className={s.compareSection}>
          <div className={s.compareInner}>
            <p className={s.eyebrow}>Side by side</p>
            <h2 className={s.h2Large}>{copy.howItWorks.h2}</h2>
            <div className={s.compareGrid}>
              <article className={`${s.compareCard} ${s.compareOld}`}>
                <p className={s.compareLabel}>{copy.howItWorks.oldWay.label}</p>
                <ol className={s.compareList}>
                  {copy.howItWorks.oldWay.steps.map((step, i) => (
                    <li key={step}><span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>{step}</li>
                  ))}
                </ol>
                <p className={s.compareResult}>{copy.howItWorks.oldWay.result}</p>
              </article>
              <article className={`${s.compareCard} ${s.compareNew}`}>
                <p className={s.compareLabel}>{copy.howItWorks.safeWay.label}</p>
                <ol className={s.compareList}>
                  {copy.howItWorks.safeWay.steps.map((step, i) => (
                    <li key={step}><span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>{step}</li>
                  ))}
                </ol>
                <p className={s.compareResult}>{copy.howItWorks.safeWay.result}</p>
              </article>
            </div>
            <div className={s.compareCtaRow}>
              <a href="#start" className={s.btnPrimary}>{copy.howItWorks.cta}</a>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI DIFFERENCE */}
        <section className={s.section}>
          <div className={s.sectionGrid}>
            <div className={s.colNarrow}>
              <p className={s.eyebrow}>The infrastructure</p>
              <h2 className={s.h2}>{copy.aiDifference.h2}</h2>
            </div>
            <div className={s.colWide}>
              <div className={s.aiGrid}>
                <div>
                  <p className={s.aiLabel}>{copy.aiDifference.traditional.label}</p>
                  <ul className={s.aiList}>
                    {copy.aiDifference.traditional.steps.map((step) => (
                      <li key={step}>— {step}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={s.aiLabel}>{copy.aiDifference.ai.label}</p>
                  <ul className={s.aiList} data-tone="accent">
                    {copy.aiDifference.ai.steps.map((step) => (
                      <li key={step}>— {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {copy.aiDifference.supporting.map((p) => (
                <p key={p} className={s.support}>{p}</p>
              ))}
              <a href="#demo" className={s.btnLink}>{copy.aiDifference.cta} →</a>
            </div>
          </div>
        </section>

        {/* SECTION 6 — UNFAIR ADVANTAGE (pull quote) */}
        <section className={s.quoteSection}>
          <div className={s.quoteInner}>
            <p className={s.eyebrow}>Listing presentation</p>
            <h2 className={s.quoteH2}>{copy.unfairAdvantage.h2}</h2>
            <blockquote className={s.bigQuote}>
              {copy.unfairAdvantage.quote}
            </blockquote>
            {copy.unfairAdvantage.body.map((p) => (
              <p key={p} className={s.quoteBody}>{p}</p>
            ))}
          </div>
        </section>

        {/* SECTION 7 — EVERYTHING INCLUDED */}
        <section className={s.includedSection}>
          <div className={s.includedInner}>
            <p className={s.eyebrow}>What you get</p>
            <h2 className={s.h2Large}>{copy.included.h2}</h2>
            <div className={s.includedGrid}>
              {copy.included.groups.map((g) => (
                <article key={g.label} className={s.includedCard}>
                  <p className={s.includedLabel}>{g.label}</p>
                  <ul className={s.includedList}>
                    {g.items.map((it) => (
                      <li key={it}><span className={s.tick}>✓</span><span>{it}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className={s.investGrid}>
              <div>
                <p className={s.investLabel}>Total value</p>
                <p className={s.investValue}>{copy.included.totalValue}</p>
              </div>
              <div>
                <p className={s.investLabel}>If listing sells</p>
                <p className={s.investValue}>{copy.included.ifSells}</p>
              </div>
              <div>
                <p className={s.investLabel}>If it doesn’t sell</p>
                <p className={`${s.investValue} ${s.investHero}`}>{copy.included.ifNotSells}</p>
              </div>
            </div>
            <div className={s.compareCtaRow}>
              <a href="#start" className={s.btnPrimary}>{copy.included.cta}</a>
            </div>
          </div>
        </section>

        {/* SECTION 8 — SOCIAL PROOF */}
        <section id="proof" className={s.proofSection}>
          <div className={s.proofInner}>
            <p className={s.eyebrow}>Trust</p>
            <h2 className={s.h2Large}>{copy.socialProof.h2}</h2>
            <p className={s.proofIntro}>{copy.socialProof.intro}</p>
            <div className={s.proofImageBand}>
              <ImageSlot
                ratio="16/9"
                tone="dark"
                kind="portrait"
                caption="Real Cloud Title team — environmental portrait, Florida office"
                prompt={`Editorial environmental portrait of a small Florida title agency team of 3 — two women, one man, mixed ages 35–55, business casual real Florida professionals (not stock types), inside a modern glass-fronted Tampa office, mid-morning sidelight, documents and a laptop on a wood table, neutral expressions, looking off-camera. Leica Q, natural daylight, shallow depth, no posed handshakes.`}
              />
            </div>
            <div className={s.proofGrid}>
              {copy.socialProof.testimonials.map((t) => (
                <article key={t.name} className={s.testimonialCard}>
                  <p className={s.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <p className={s.testimonialName}>{t.name}</p>
                  <p className={s.testimonialRole}>{t.role}</p>
                  {t.placeholder ? (
                    <p className={s.testimonialPlaceholder}>Placeholder — real quotes from Thomas in Divi phase</p>
                  ) : null}
                </article>
              ))}
            </div>
            <ul className={s.proofTrust}>
              {copy.socialProof.trustRow.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* SECTION 9 — CASE STUDIES */}
        <section className={s.section}>
          <div className={s.sectionGrid}>
            <div className={s.colNarrow}>
              <p className={s.eyebrow}>Case work</p>
              <h2 className={s.h2}>{copy.caseStudies.h2}</h2>
            </div>
            <div className={s.colWide}>
              <div className={s.caseImage}>
                <ImageSlot
                  ratio="4/3"
                  tone="light"
                  kind="supporting"
                  caption="Real Florida home, exterior at twilight, no people"
                  prompt={`Twilight architectural photograph of a $1M+ waterfront Florida home in Naples — modern coastal architecture, white stucco and dark wood, windows lit from within, cool blue post-sunset sky (NOT orange), no people, no palms in foreground, clean water in the background. Architectural Digest style, tripod-stable.`}
                />
              </div>
              <div className={s.caseGrid}>
                {copy.caseStudies.cases.map((c, i) => (
                  <article key={c.property} className={s.caseCard}>
                    <p className={s.caseNum}>{String(i + 1).padStart(2, "0")} / {String(copy.caseStudies.cases.length).padStart(2, "0")}</p>
                    <p className={s.caseProperty}>{c.property}</p>
                    <dl className={s.caseList}>
                      <dt>Issue</dt><dd>{c.issue}</dd>
                      {"discovered" in c && c.discovered ? (<><dt>Discovered</dt><dd>{c.discovered}</dd></>) : null}
                      <dt>Resolution</dt><dd>{c.resolved}</dd>
                      <dt>Result</dt><dd className={s.caseResult}>{c.result}</dd>
                    </dl>
                  </article>
                ))}
              </div>
              <a href="#start" className={s.btnLink}>{copy.caseStudies.cta} →</a>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section id="faq" className={s.faqSection}>
          <div className={s.faqInner}>
            <p className={s.eyebrow}>FAQ</p>
            <h2 className={s.h2Large}>{copy.faq.h2}</h2>
            <dl className={s.faqList}>
              {copy.faq.items.map((q) => (
                <div key={q.q} className={s.faqItem}>
                  <dt>{q.q}</dt>
                  <dd>{q.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 11 — LIMITED ONBOARDING */}
        <section className={s.limitedSection}>
          <div className={s.limitedInner}>
            <p className={s.eyebrow}>Capacity</p>
            <h2 className={s.h2Large}>{copy.limitedOnboarding.h2}</h2>
            {copy.limitedOnboarding.body.map((p) => (<p key={p} className={s.limitedBody}>{p}</p>))}
            <a href="#start" className={s.btnPrimary}>{copy.limitedOnboarding.cta}</a>
          </div>
        </section>

        {/* SECTION 12 — FINAL CTA */}
        <section id="start" className={s.finalSection}>
          <div className={s.finalInner}>
            <p className={s.eyebrow}>Choose your next step</p>
            <h2 className={s.h2Large}>{copy.finalCta.h2}</h2>
            <div className={s.finalGrid}>
              <DemoForm className={s.finalForm}>
                <p className={s.finalLabel}>{copy.finalCta.options[0].label}</p>
                {copy.finalCta.options[0].fields?.map((f) => (
                  <label key={f} className={s.field}>
                    <span>{f}</span>
                    <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                  </label>
                ))}
                <button type="submit" className={s.btnPrimary}>
                  {copy.finalCta.options[0].cta}
                </button>
                <p className={s.finalSupport}>{copy.finalCta.options[0].supporting}</p>
              </DemoForm>
              {/* Alt CTAs demoted to plain editorial links — kills the
                  choice-paralysis flagged in the audit (3 ghost buttons
                  competing with the form). */}
              <ul className={s.finalAltList} aria-label="Alternative steps">
                {copy.finalCta.options.slice(1).map((o) => (
                  <li key={o.label}>
                    <a href="#" className={s.finalAltLink}>{o.cta} →</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 13 — GUARANTEES */}
        <section className={s.guaranteeSection}>
          <div className={s.guaranteeInner}>
            <p className={s.eyebrow}>The fine print</p>
            <h2 className={s.h2Large}>{copy.guarantees.h2}</h2>
            <ul className={s.guaranteeList}>
              {copy.guarantees.items.map((g) => (<li key={g}>{g}</li>))}
            </ul>
            <p className={s.guaranteeFinal}>{copy.guarantees.final}</p>
          </div>
        </section>

      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
