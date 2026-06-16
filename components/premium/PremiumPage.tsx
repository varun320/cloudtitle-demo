import { copy } from "@/content/homepage-copy";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";
import { ImageSlot } from "@/components/shared/ImageSlot";
import s from "./premium.module.css";

/**
 * Concept C — Premium minimal.
 *
 * Direction (per references/analysis.md):
 *   Side's restraint × Stripe's whitespace × ONE Sotheby's dark luxury.
 *
 * Typography: Inter Display + Raleway body. Oversized confident type.
 * Layout: maximum whitespace, one hero photograph mood (gradient placeholder),
 * a single accent (maroon) used very sparingly on a navy + bone-white ground.
 * Almost no motion. Florida = water geometry + architecture, never flora.
 */
export function PremiumPage() {
  return (
    <>
      <Nav variant="dark" />
      <main id="main" className={s.main}>

        {/* SECTION 1 — HERO (dark, oversized type) */}
        <section className={s.hero}>
          <div className={s.heroLayer} aria-hidden />
          <div className={s.heroBgImage} aria-hidden>
            <ImageSlot
              ratio="21/9"
              tone="dark"
              kind="hero"
              caption="Hero background — Florida causeway at blue hour, type-safe upper-left negative space"
              prompt={`Cinematic ultra-wide architectural photograph of a Florida concrete causeway disappearing into the Gulf of Mexico at blue hour just after sunset — sky deep navy with one hint of indigo, water dark and still, no boats, no people, no palms. Shot on Arri Alexa LF with master prime lens, cinematic colour grade leaning cool. The upper-left third must remain negative-space-clean for white display type overlay.`}
            />
          </div>
          <div className={s.heroInner}>
            <div className={s.heroTop}>
              <p className={s.heroEyebrow}>{copy.hero.eyebrow}</p>
              <p className={s.heroMeta}>Florida · Miami-Dade · Broward · Palm Beach · Collier · Hillsborough · Pinellas · +61</p>
            </div>
            <h1 className={s.heroH1}>{copy.hero.h1}</h1>
            <div className={s.heroBottom}>
              <p className={s.heroSub}>{copy.hero.sub}</p>
              <div className={s.heroCtas}>
                <a href="#start" className={s.btnPrimary}>{copy.hero.primaryCta}</a>
                <a href="#demo" className={s.btnText}>{copy.hero.secondaryCta} →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust trio — promoted from a one-line foot row to a real bordered
            tile band per audit (analysis.md non-negotiable). Sits between
            hero and pattern interrupt so it lands above the fold on most
            desktops while staying premium-quiet. */}
        <aside className={s.trustBand} aria-label="Trust signals">
          <div className={s.trustTile}>
            <p className={s.trustEyebrow}>Underwritten by</p>
            <p className={s.trustValue}>
              Fidelity National Title
              <span className={s.trustDivider} aria-hidden>·</span>
              First American Title
            </p>
            <p className={s.trustFoot}>Member · Florida Land Title Association</p>
          </div>
          <div className={s.trustTile}>
            <p className={s.trustEyebrow}>Florida-agent rating</p>
            <p className={s.trustValue}>
              4.9<span className={s.trustValueSub}> / 5</span>
            </p>
            <p className={s.trustFoot}>Based on internal averages</p>
          </div>
          <div className={s.trustTile}>
            <p className={s.trustEyebrow}>Closed in 2025</p>
            <p className={s.trustValueHero}>$127M+</p>
            <p className={s.trustFoot}>Based on internal averages</p>
          </div>
        </aside>

        {/* SECTION 2 — PATTERN INTERRUPT */}
        <section className={s.interrupt}>
          <div className={s.col}>
            <p className={s.eyebrow}>The reality of 2025</p>
            <h2 className={s.h2Hero}>{copy.patternInterrupt.h2}</h2>
          </div>
          <div className={s.col}>
            <div className={s.interruptStory}>
              {copy.patternInterrupt.body.map((p, i) => (
                <p key={p} data-line={i}>{p}</p>
              ))}
            </div>
            <a href="#safe-listing" className={s.btnText}>{copy.patternInterrupt.cta} →</a>
          </div>
        </section>

        {/* SECTION 3 — SAFE LISTING */}
        <section id="safe-listing" className={s.sectionLight}>
          <div className={s.maxW}>
            <p className={s.eyebrowDark}>The system</p>
            <h2 className={s.h2Hero}>{copy.safeListing.h2}</h2>
            <p className={s.lead}>{copy.safeListing.sub}</p>
            <ul className={s.benefitColumn}>
              {copy.safeListing.benefits.map((b, i) => (
                <li key={b}>
                  <span className={s.benefitNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className={s.support}>{copy.safeListing.supporting.join(" ")}</p>
          </div>
        </section>

        {/* SECTION 4 — HOW IT WORKS */}
        <section id="how-it-works" className={s.processSection}>
          <div className={s.maxW}>
            <p className={s.eyebrow}>Side by side</p>
            <h2 className={s.h2Hero}>{copy.howItWorks.h2}</h2>
          </div>
          <div className={s.processGrid}>
            <article className={s.processCol}>
              <p className={s.processLabel}>{copy.howItWorks.oldWay.label}</p>
              <ol className={s.processList}>
                {copy.howItWorks.oldWay.steps.map((step) => (<li key={step}>{step}</li>))}
              </ol>
              <p className={s.processResult}>{copy.howItWorks.oldWay.result}</p>
            </article>
            <article className={s.processColAccent}>
              <p className={s.processLabel}>{copy.howItWorks.safeWay.label}</p>
              <ol className={s.processList}>
                {copy.howItWorks.safeWay.steps.map((step) => (<li key={step}>{step}</li>))}
              </ol>
              <p className={s.processResultAccent}>{copy.howItWorks.safeWay.result}</p>
            </article>
          </div>
          <div className={s.maxW}>
            <a href="#start" className={s.btnPrimary}>{copy.howItWorks.cta}</a>
          </div>
        </section>

        {/* SECTION 5 — AI DIFFERENCE */}
        <section className={s.sectionLight}>
          <div className={s.split}>
            <div className={s.colNarrow}>
              <p className={s.eyebrowDark}>The infrastructure</p>
              <h2 className={s.h2Hero}>{copy.aiDifference.h2}</h2>
            </div>
            <div className={s.colWide}>
              <div className={s.aiGrid}>
                <div>
                  <p className={s.aiLabel}>{copy.aiDifference.traditional.label}</p>
                  <ul className={s.aiList}>
                    {copy.aiDifference.traditional.steps.map((step) => (<li key={step}>{step}</li>))}
                  </ul>
                </div>
                <div>
                  <p className={s.aiLabelAccent}>{copy.aiDifference.ai.label}</p>
                  <ul className={s.aiListAccent}>
                    {copy.aiDifference.ai.steps.map((step) => (<li key={step}>{step}</li>))}
                  </ul>
                </div>
              </div>
              <p className={s.support}>{copy.aiDifference.supporting.join(" ")}</p>
              <a href="#demo" className={s.btnText}>{copy.aiDifference.cta} →</a>
            </div>
          </div>
        </section>

        {/* SECTION 6 — UNFAIR ADVANTAGE */}
        <section className={s.quoteSection}>
          <div className={s.maxW}>
            <p className={s.eyebrow}>Listing presentation</p>
            <blockquote className={s.massiveQuote}>{copy.unfairAdvantage.quote}</blockquote>
            <div className={s.quoteBody}>
              {copy.unfairAdvantage.body.map((p) => (<p key={p}>{p}</p>))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — INCLUDED */}
        <section className={s.sectionLight}>
          <div className={s.maxW}>
            <p className={s.eyebrowDark}>What you get</p>
            <h2 className={s.h2Hero}>{copy.included.h2}</h2>
            <div className={s.includedGrid}>
              {copy.included.groups.map((g, i) => (
                <article key={g.label} className={s.includedCol}>
                  <p className={s.includedNum}>{String(i + 1).padStart(2, "0")} /</p>
                  <p className={s.includedLabel}>{g.label}</p>
                  <ul className={s.includedList}>
                    {g.items.map((it) => (<li key={it}>{it}</li>))}
                  </ul>
                </article>
              ))}
            </div>
            <div className={s.investBlock}>
              <div><p className={s.investK}>Total value</p><p className={s.investV}>{copy.included.totalValue}</p></div>
              <div><p className={s.investK}>If sells</p><p className={s.investV}>{copy.included.ifSells}</p></div>
              <div><p className={s.investK}>If not</p><p className={s.investVHero}>{copy.included.ifNotSells}</p></div>
            </div>
            <a href="#start" className={s.btnPrimary}>{copy.included.cta}</a>
          </div>
        </section>

        {/* IMAGE BAND — single architectural detail before proof */}
        <div className={s.imageBand}>
          <ImageSlot
            ratio="2/1"
            tone="light"
            kind="supporting"
            caption="Architectural interior detail — polished concrete and wood, raking sidelight"
            prompt={`Architectural detail of a modernist Florida bank-or-courthouse interior — polished concrete floor meeting a wood-panel wall, raking sidelight from a tall narrow window, single bronze-finish door handle in focus, no people, no signage, no decoration. Slow, contemplative, premium real-estate magazine style. Fuji GFX, available light, no flash.`}
          />
        </div>

        {/* SECTION 8 — PROOF */}
        <section id="proof" className={s.proofSection}>
          <div className={s.maxW}>
            <p className={s.eyebrow}>Trust</p>
            <h2 className={s.h2Hero}>{copy.socialProof.h2}</h2>
            <p className={s.lead}>{copy.socialProof.intro}</p>
            <figure className={s.bigTestimonial}>
              <blockquote>&ldquo;{copy.socialProof.testimonials[0].quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{copy.socialProof.testimonials[0].name}</strong> · {copy.socialProof.testimonials[0].role}
                {copy.socialProof.testimonials[0].placeholder ? (
                  <span className={s.placeholderBadge}>Placeholder</span>
                ) : null}
              </figcaption>
            </figure>
            <ul className={s.proofTrust}>
              {copy.socialProof.trustRow.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* SECTION 9 — CASE STUDIES */}
        <section className={s.sectionLight}>
          <div className={s.split}>
            <div className={s.colNarrow}>
              <p className={s.eyebrowDark}>Case work</p>
              <h2 className={s.h2Hero}>{copy.caseStudies.h2}</h2>
            </div>
            <div className={s.colWide}>
              <div className={s.caseList}>
                {copy.caseStudies.cases.map((c, i) => (
                  <article key={c.property} className={s.caseRow}>
                    <p className={s.caseIndex}>{String(i + 1).padStart(2, "0")}</p>
                    <div>
                      <p className={s.caseProp}>{c.property}</p>
                      <dl className={s.caseDl}>
                        <dt>Issue</dt><dd>{c.issue}</dd>
                        {"discovered" in c && c.discovered ? (<><dt>Discovered</dt><dd>{c.discovered}</dd></>) : null}
                        <dt>Resolution</dt><dd>{c.resolved}</dd>
                        <dt>Result</dt><dd className={s.caseResult}>{c.result}</dd>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
              <a href="#start" className={s.btnText}>{copy.caseStudies.cta} →</a>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section id="faq" className={s.faqSection}>
          <div className={s.split}>
            <div className={s.colNarrow}>
              <p className={s.eyebrow}>FAQ</p>
              <h2 className={s.h2Hero}>{copy.faq.h2}</h2>
            </div>
            <dl className={s.colWide}>
              {copy.faq.items.map((q) => (
                <div key={q.q} className={s.faqRow}>
                  <dt>{q.q}</dt>
                  <dd>{q.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 11 — LIMITED ONBOARDING */}
        <section className={s.limitedSection}>
          <div className={s.maxW}>
            <p className={s.eyebrow}>Capacity</p>
            <h2 className={s.h2Hero}>{copy.limitedOnboarding.h2}</h2>
            <p className={s.lead}>{copy.limitedOnboarding.body.join(" ")}</p>
            <a href="#start" className={s.btnPrimary}>{copy.limitedOnboarding.cta}</a>
          </div>
        </section>

        {/* SECTION 12 — FINAL CTA */}
        <section id="start" className={s.finalSection}>
          <div className={s.maxW}>
            <p className={s.eyebrowDark}>Choose your next step</p>
            <h2 className={s.h2Hero}>{copy.finalCta.h2}</h2>
            <div className={s.finalGrid}>
              <DemoForm className={s.finalForm}>
                <p className={s.finalLabel}>{copy.finalCta.options[0].label}</p>
                {copy.finalCta.options[0].fields?.map((f) => (
                  <label key={f} className={s.field}>
                    <span>{f}</span>
                    <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                  </label>
                ))}
                <button type="submit" className={s.btnPrimary}>{copy.finalCta.options[0].cta}</button>
                <p className={s.finalSupport}>{copy.finalCta.options[0].supporting}</p>
              </DemoForm>
              <ul className={s.finalAlt}>
                {copy.finalCta.options.slice(1).map((o) => (
                  <li key={o.label}><a href="#" className={s.btnText}>{o.cta} →</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 13 — GUARANTEES */}
        <section className={s.guaranteeSection}>
          <div className={s.maxW}>
            <p className={s.eyebrow}>The fine print</p>
            <h2 className={s.h2Hero}>{copy.guarantees.h2}</h2>
            <ul className={s.guaranteeList}>
              {copy.guarantees.items.map((g, i) => (
                <li key={g}><span className={s.gNum}>{String(i + 1).padStart(2, "0")}</span> {g}</li>
              ))}
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
