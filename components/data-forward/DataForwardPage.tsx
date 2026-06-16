import { copy } from "@/content/homepage-copy";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";
import { ImageSlot } from "@/components/shared/ImageSlot";
import { ArrowRight, CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import s from "./data-forward.module.css";

/**
 * Concept B — Data-forward.
 *
 * Direction (per references/analysis.md):
 *   Stripe bento × Qualia underwriter wall × Greenberg Traurig stats-as-design.
 *
 * Typography: Geist Sans + Geist Mono on stats. Layout: bento grid, stat tiles,
 * comparison tables, denser sections. Subtle counter-style number reveals.
 * "Based on internal averages" labels visible on every quantified claim.
 */
export function DataForwardPage() {
  return (
    <>
      <Nav />
      <main id="main" className={s.main}>

        {/* SECTION 1 — HERO (bento) */}
        <section className={s.hero}>
          <div className={s.heroBento}>
            <div className={s.heroCopy}>
              <p className={s.heroEyebrowPlain}>{copy.hero.eyebrow}</p>
              <h1 className={s.heroH1}>{copy.hero.h1}</h1>
              <p className={s.heroSub}>{copy.hero.sub}</p>
              <div className={s.ctaRow}>
                <a href="#start" className={s.btnPrimary}>{copy.hero.primaryCta} <ArrowRight size={18} /></a>
                <a href="#demo" className={s.btnGhost}>{copy.hero.secondaryCta}</a>
              </div>
            </div>

            <div className={s.heroStat} data-tone="brand">
              <p className={s.statLabel}>Closed in 2025</p>
              <p className={s.statValue}><span className={s.statPrefix}>$</span>127M<span className={s.statSuffix}>+</span></p>
              <p className={s.statFoot}>Based on internal averages</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.statLabel}>Avg. days to close</p>
              <p className={s.statValue}>10<span className={s.statSuffix}>d</span></p>
              <p className={s.statFootCompare}>vs. <s>30d</s> industry</p>
              <p className={s.statFoot}>Based on internal averages</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.statLabel}>Florida agent rating</p>
              <p className={s.statValue}>4.9<span className={s.statSuffix}>/5</span></p>
              <p className={s.statFoot}>Based on internal averages</p>
            </div>

            <div className={s.heroLogos}>
              <p className={s.logoLabel}>Underwritten by</p>
              <div className={s.logoStrip}>
                <span>Fidelity National Title</span>
                <span>First American Title</span>
                <span>Florida Land Title Assn.</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2 — PATTERN INTERRUPT (dark stat callout) */}
        <section className={s.interrupt}>
          <div className={s.interruptInner}>
            <div className={s.interruptHead}>
              <AlertTriangle className={s.warnIcon} size={32} aria-hidden />
              <p className={s.interruptKicker}>Risk exposure</p>
            </div>
            <h2 className={s.interruptH2}>{copy.patternInterrupt.h2}</h2>
            <div className={s.interruptGrid}>
              <article className={s.dataCard}>
                <p className={s.dataKpi}>$2.1M</p>
                <p className={s.dataLabel}>Deal collapsed at day 28</p>
                <p className={s.dataFoot}>Illustrative example from agent reports</p>
              </article>
              <article className={s.dataCard}>
                <p className={s.dataKpi}>Day 28</p>
                <p className={s.dataLabel}>Judgment lien discovered (post-contract)</p>
                <p className={s.dataFoot}>Illustrative example from agent reports</p>
              </article>
              <article className={s.dataCard}>
                <p className={s.dataKpi}>3</p>
                <p className={s.dataLabel}>Parties harmed: agent, seller, buyer</p>
                <p className={s.dataFoot}>Illustrative example from agent reports</p>
              </article>
            </div>
            <div className={s.interruptBody}>
              {copy.patternInterrupt.body.slice(-3).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a href="#safe-listing" className={s.btnPrimary}>{copy.patternInterrupt.cta} <ArrowRight size={18} /></a>
          </div>
        </section>

        {/* SECTION 3 — SAFE LISTING (bento) */}
        <section id="safe-listing" className={s.section}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>The system</p>
            <h2 className={s.h2}>{copy.safeListing.h2}</h2>
            <p className={s.sub}>{copy.safeListing.sub}</p>
            <ul className={s.benefitGrid}>
              {copy.safeListing.benefits.map((b) => (
                <li key={b}><CheckCircle2 size={20} aria-hidden /><span>{b}</span></li>
              ))}
            </ul>
            <p className={s.support}>{copy.safeListing.supporting.join(" ")}</p>
          </div>
        </section>

        {/* SECTION 4 — HOW IT WORKS (data table) */}
        <section id="how-it-works" className={s.compareSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Process comparison</p>
            <h2 className={s.h2}>{copy.howItWorks.h2}</h2>
            <table className={s.dataTable}>
              <thead>
                <tr>
                  <th scope="col" className={s.thTime}>Timeline</th>
                  <th scope="col" className={s.thOld}>{copy.howItWorks.oldWay.label}</th>
                  <th scope="col" className={s.thNew}>{copy.howItWorks.safeWay.label}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Day 1", copy.howItWorks.oldWay.steps[0], copy.howItWorks.safeWay.steps[0]],
                  ["Day 1–3", "—", copy.howItWorks.safeWay.steps[2]],
                  ["Day 3–7", "—", copy.howItWorks.safeWay.steps[3]],
                  ["Day 25–35", copy.howItWorks.oldWay.steps[1], copy.howItWorks.safeWay.steps[4]],
                  ["Day 30+", copy.howItWorks.oldWay.steps[2], copy.howItWorks.safeWay.steps[5]],
                  ["After", copy.howItWorks.oldWay.steps[3], copy.howItWorks.safeWay.steps[6]],
                ].map(([t, o, n]) => (
                  <tr key={t}>
                    <td className={s.tdTime}>{t}</td>
                    <td className={s.tdOld}>{o}</td>
                    <td className={s.tdNew}>{n}</td>
                  </tr>
                ))}
                <tr className={s.tdResult}>
                  <th scope="row">Result</th>
                  <td>{copy.howItWorks.oldWay.result}</td>
                  <td className={s.tdResultWin}>{copy.howItWorks.safeWay.result}</td>
                </tr>
              </tbody>
            </table>
            <div className={s.compareCtaRow}>
              <a href="#start" className={s.btnPrimary}>{copy.howItWorks.cta} <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI DIFFERENCE (split panel) */}
        <section className={s.aiSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>The infrastructure</p>
            <h2 className={s.h2}>{copy.aiDifference.h2}</h2>
            <div className={s.aiVisualSlot}>
              <ImageSlot
                ratio="21/9"
                tone="dark"
                kind="process"
                caption="AI title-search data flow — parallel county nodes, one resolved path"
                prompt={`Abstract data-visualization graphic on a deep navy background — a network of fine pale-grey lines connecting circular nodes labelled Miami-Dade, Broward, Palm Beach, Collier, one highlighted pathway in maroon. Minimal, flat, no 3D, no glow. Stripe-style technical illustration, monochrome navy palette with one maroon accent.`}
              />
            </div>
            <div className={s.aiGrid}>
              <article className={s.aiCard} data-tone="muted">
                <p className={s.aiCardLabel}>{copy.aiDifference.traditional.label}</p>
                <ul>{copy.aiDifference.traditional.steps.map((x) => (<li key={x}>{x}</li>))}</ul>
              </article>
              <article className={s.aiCard} data-tone="accent">
                <p className={s.aiCardLabel}><Zap size={16} aria-hidden /> {copy.aiDifference.ai.label}</p>
                <ul>{copy.aiDifference.ai.steps.map((x) => (<li key={x}>{x}</li>))}</ul>
              </article>
            </div>
            <p className={s.support}>{copy.aiDifference.supporting.join(" ")}</p>
            <a href="#demo" className={s.btnGhost}>{copy.aiDifference.cta} <ArrowRight size={16} /></a>
          </div>
        </section>

        {/* SECTION 6 — UNFAIR ADVANTAGE */}
        <section className={s.quoteSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Listing presentation</p>
            <h2 className={s.h2}>{copy.unfairAdvantage.h2}</h2>
            <blockquote className={s.quote}>{copy.unfairAdvantage.quote}</blockquote>
            <div className={s.quoteBody}>
              {copy.unfairAdvantage.body.map((p) => (<p key={p}>{p}</p>))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — INCLUDED */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>What you get</p>
            <h2 className={s.h2}>{copy.included.h2}</h2>
            <div className={s.includedGrid}>
              {copy.included.groups.map((g) => (
                <article key={g.label} className={s.includedCard}>
                  <p className={s.includedLabel}>{g.label}</p>
                  <ul>{g.items.map((it) => (<li key={it}><CheckCircle2 size={16} aria-hidden /> {it}</li>))}</ul>
                </article>
              ))}
            </div>
            <div className={s.investRow}>
              <div className={s.investCell}><p className={s.investLabel}>Total value</p><p className={s.investVal}>{copy.included.totalValue}</p></div>
              <div className={s.investCell}><p className={s.investLabel}>If sells</p><p className={s.investVal}>{copy.included.ifSells}</p></div>
              <div className={s.investCell} data-hero><p className={s.investLabel}>If not</p><p className={s.investVal}>{copy.included.ifNotSells}</p></div>
            </div>
            <a href="#start" className={s.btnPrimary}>{copy.included.cta} <ArrowRight size={18} /></a>
          </div>
        </section>

        {/* SECTION 8 — SOCIAL PROOF */}
        <section id="proof" className={s.proofSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Trust</p>
            <h2 className={s.h2}>{copy.socialProof.h2}</h2>
            <p className={s.support}>{copy.socialProof.intro}</p>
            <div className={s.proofBento}>
              {copy.socialProof.testimonials.slice(0, 2).map((t) => (
                <article key={t.name} className={s.testimonial}>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <strong>{t.name}</strong> · {t.role}
                    {t.placeholder ? <span className={s.placeholderBadge}>Placeholder</span> : null}
                  </footer>
                </article>
              ))}
              <article className={s.proofMap}>
                <ImageSlot
                  ratio="1/1"
                  tone="light"
                  kind="supporting"
                  caption="Florida 67-county map — top-5 active counties in solid navy"
                  prompt={`Flat vector-style choropleth map of the state of Florida — all 67 counties outlined in fine pale-grey lines on a bone-white background, the top 5 most-active counties (Miami-Dade, Broward, Palm Beach, Hillsborough, Pinellas) filled in solid navy, others left white. No labels, no compass, no shadows, no decoration. Functional infographic, not decorative.`}
                />
              </article>
              <article className={s.proofKpi}>
                <p className={s.proofKpiVal}>4.9<span className={s.statSuffix}>★</span></p>
                <p className={s.proofKpiLabel}>Google rating</p>
                <p className={s.proofKpiFoot}>Based on internal averages</p>
              </article>
              <article className={s.proofKpi}>
                <p className={s.proofKpiVal}>48<span className={s.statSuffix}>h</span></p>
                <p className={s.proofKpiLabel}>To full title analysis</p>
                <p className={s.proofKpiFoot}>Based on internal averages</p>
              </article>
            </div>
            <ul className={s.trustList}>
              {copy.socialProof.trustRow.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* SECTION 9 — CASE STUDIES (data cards) */}
        <section className={s.section}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Case work</p>
            <h2 className={s.h2}>{copy.caseStudies.h2}</h2>
            <div className={s.caseGrid}>
              {copy.caseStudies.cases.map((c, i) => (
                <article key={c.property} className={s.caseCard}>
                  <p className={s.caseId}>CASE-{String(i + 1).padStart(3, "0")}</p>
                  <p className={s.caseProp}>{c.property}</p>
                  <dl>
                    <div><dt>Issue</dt><dd>{c.issue}</dd></div>
                    {"discovered" in c && c.discovered ? (<div><dt>Discovered</dt><dd>{c.discovered}</dd></div>) : null}
                    <div><dt>Resolution</dt><dd>{c.resolved}</dd></div>
                    <div><dt>Result</dt><dd className={s.caseResult}>{c.result}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            <a href="#start" className={s.btnPrimary}>{copy.caseStudies.cta} <ArrowRight size={18} /></a>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section id="faq" className={s.faqSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>FAQ</p>
            <h2 className={s.h2}>{copy.faq.h2}</h2>
            <div className={s.faqGrid}>
              {copy.faq.items.map((q) => (
                <details key={q.q} className={s.faqItem}>
                  <summary>{q.q}</summary>
                  <p>{q.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11 — LIMITED ONBOARDING */}
        <section className={s.limitedSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Capacity</p>
            <h2 className={s.h2}>{copy.limitedOnboarding.h2}</h2>
            <div className={s.limitedGrid}>
              <div>
                {copy.limitedOnboarding.body.map((p) => (<p key={p} className={s.support}>{p}</p>))}
                <a href="#start" className={s.btnPrimary}>{copy.limitedOnboarding.cta} <ArrowRight size={18} /></a>
              </div>
              <div className={s.capacityCard}>
                <p className={s.capacityLabel}>Onboarding slots this month</p>
                <p className={s.capacityBar}>
                  <span className={s.capacityFill} style={{ width: "82%" }} />
                </p>
                <p className={s.capacityRow}><span>Filled</span><strong>82%</strong></p>
                <p className={s.capacityRow}><span>Remaining</span><strong>9 spots</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 — FINAL CTA */}
        <section id="start" className={s.finalSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Choose your next step</p>
            <h2 className={s.h2}>{copy.finalCta.h2}</h2>
            <div className={s.finalGrid}>
              <DemoForm className={s.finalForm}>
                <p className={s.finalLabel}>{copy.finalCta.options[0].label}</p>
                {copy.finalCta.options[0].fields?.map((f) => (
                  <label key={f} className={s.field}>
                    <span>{f}</span>
                    <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                  </label>
                ))}
                <button type="submit" className={s.btnPrimary}>{copy.finalCta.options[0].cta} <ArrowRight size={18} /></button>
                <p className={s.finalSupport}>{copy.finalCta.options[0].supporting}</p>
              </DemoForm>
              <ul className={s.finalAlt}>
                {copy.finalCta.options.slice(1).map((o, i) => (
                  <li key={o.label}>
                    <a href="#" className={s.finalAltLink}>
                      <span className={s.finalAltNum}>0{i + 2}</span>
                      <span className={s.finalAltLabel}>{o.cta}</span>
                      <ArrowRight size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 13 — GUARANTEES */}
        <section className={s.guaranteeSection}>
          <div className={s.sectionInner}>
            <p className={s.eyebrow}>Guarantees</p>
            <h2 className={s.h2}>{copy.guarantees.h2}</h2>
            <div className={s.guaranteeGrid}>
              {copy.guarantees.items.map((g, i) => (
                <article key={g} className={s.guaranteeCard}>
                  <p className={s.guaranteeNum}>0{i + 1}</p>
                  <p className={s.guaranteeName}>{g}</p>
                </article>
              ))}
            </div>
            <p className={s.guaranteeFinal}>{copy.guarantees.final}</p>
          </div>
        </section>

      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
