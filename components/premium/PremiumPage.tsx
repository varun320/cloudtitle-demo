import { copy } from "@/content/homepage-copy";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";
import { ImageSlot } from "@/components/shared/ImageSlot";
import s from "./premium.module.css";

/**
 * Concept C — Folio.
 *
 * The homepage typeset as a high-end archival prospectus / annual-report
 * dossier. Six movements ("folios"), Swiss/Vignelli grid, Newsreader italic
 * for display, Geist Mono for folio marks and marginalia, ruled comparison
 * tables, numbered EXHIBITS, archival image plates with sepia/gray treatment.
 *
 *   COVER         Frontispiece — typography only, volume number, cover meta
 *   FOLIO I       The Thesis    — pattern interrupt + safe listing benefits
 *   FOLIO II      The Method    — ruled comparison tables (process + AI)
 *   FOLIO III     The Exhibits  — quote + case studies + archive plate (C1)
 *   FOLIO IV      The Instrument— included terms + capacity stamp + plate (C2)
 *   FOLIO V       Subscription  — subscription card + appendices (FAQ + guarantees)
 *
 * Hard rules carried in: verbatim copy, no section-separator hairlines
 * between sections (surface alone divides), no emoji, ink-blue accent
 * scoped here (not maroon — Editorial and Data-forward already use maroon).
 */

const FOLIO_TOTAL = "V";

export function PremiumPage() {
  return (
    <>
      <Nav variant="light" />
      <main id="main" className={s.main}>

        {/* ============================================================
            COVER — frontispiece. Type-only. No photo. Volume mark.
            ============================================================ */}
        <section className={s.cover} aria-labelledby="cover-title">
          <div className={s.coverInner}>

            <div className={s.coverTop}>
              <div className={s.coverMarkBlock}>
                <p className={s.coverMarkLine}>Cloud Title</p>
                <p className={s.coverMarkLine}>Vol. 01 &middot; Ed. 01</p>
                <p className={s.coverMarkLine}>MMXXVI</p>
              </div>
              <div className={s.coverSigil} aria-hidden>
                <span className={s.coverSigilRing}>CT</span>
                <span className={s.coverSigilStamp}>EST. MMXXIV</span>
              </div>
              <div className={s.coverMetaBlock}>
                <p className={s.coverMarkLine}>{copy.hero.eyebrow}</p>
                <p className={s.coverMarkLine}>Florida &middot; 67 / 67 counties</p>
                <p className={s.coverMarkLine}>Licensed statewide</p>
              </div>
            </div>

            <div className={s.coverTitleBlock}>
              <p className={s.coverEyebrow}>A prospectus on listing certainty</p>
              <h1 id="cover-title" className={s.coverTitle}>
                The Secret Weapon <em>Top Agents Use</em><br />
                To Win Listings In <span className={s.coverYear}>2026</span>
              </h1>
              <p className={s.coverSub}>{copy.hero.sub}</p>
            </div>

            <div className={s.coverFoot}>
              <div className={s.coverCtas}>
                <a href="#subscription" className={s.btnPrimary}>{copy.hero.primaryCta}</a>
                <a href="#demo" className={s.btnGhost}>{copy.hero.secondaryCta}</a>
              </div>

              <dl className={s.coverColophon}>
                <div>
                  <dt>Published by</dt>
                  <dd>{copy.brand.legal}</dd>
                </div>
                <div>
                  <dt>Underwritten by</dt>
                  <dd>Fidelity National Title &middot; First American Title</dd>
                </div>
                <div>
                  <dt>Florida-agent rating</dt>
                  <dd>4.9 / 5 <span className={s.colophonNote}>internal averages</span></dd>
                </div>
                <div>
                  <dt>Closed in 2025</dt>
                  <dd>$127M+ <span className={s.colophonNote}>internal averages</span></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ============================================================
            FOLIO I — THE THESIS
            ============================================================ */}
        <section id="thesis" className={s.folio} aria-labelledby="folio-i-title">
          <div className={s.folioInner}>
            <header className={s.folioHead}>
              <p className={s.folioNum}>Folio 01 / {FOLIO_TOTAL}</p>
              <p className={s.folioTitle}>The Thesis</p>
              <p className={s.folioMeta}>On the cost of unexamined title</p>
            </header>

            <div className={s.thesisLead}>
              <p className={s.thesisPull}>
                <em>{copy.patternInterrupt.h2}</em>
              </p>
            </div>

            <div className={s.thesisGrid}>
              <aside className={s.marginalia} aria-label="Editor's note">
                <p className={s.marginaliaLabel}>Note 01</p>
                <p>Internal averages, FY 2025. Figures reflect Cloud Title operating data, not industry benchmarks.</p>
              </aside>

              <div className={s.thesisBody}>
                {copy.patternInterrupt.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className={s.thesisDivide}>
              <p className={s.thesisDivideMark}>&sect; I.b</p>
              <h2 id="folio-i-title" className={s.folioH2}>
                {copy.safeListing.h2}
              </h2>
              <p className={s.thesisSub}>{copy.safeListing.sub}</p>
            </div>

            <ol className={s.benefitLedger}>
              {copy.safeListing.benefits.map((b, i) => (
                <li key={b}>
                  <span className={s.ledgerNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.ledgerLine}>{b}</span>
                </li>
              ))}
            </ol>

            <div className={s.thesisGridLower}>
              <aside className={s.marginalia} aria-label="Editor's note">
                <p className={s.marginaliaLabel}>Note 02</p>
                <p>The first proactive title protection instrument written for the listing agent, not the buyer.</p>
              </aside>
              <div className={s.thesisBody}>
                {copy.safeListing.supporting.map((p) => (<p key={p}>{p}</p>))}
                <p>
                  <a href="#method" className={s.linkArrow}>{copy.patternInterrupt.cta}</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FOLIO II — THE METHOD (ruled comparison tables)
            ============================================================ */}
        <section id="method" className={s.folio} aria-labelledby="folio-ii-title">
          <div className={s.folioInner}>
            <header className={s.folioHead}>
              <p className={s.folioNum}>Folio 02 / {FOLIO_TOTAL}</p>
              <p className={s.folioTitle}>The Method</p>
              <p className={s.folioMeta}>Process &middot; infrastructure</p>
            </header>

            <h2 id="folio-ii-title" className={s.folioH2}>
              <em>{copy.howItWorks.h2}</em>
            </h2>

            <figure className={s.tableFigure}>
              <figcaption className={s.tableCaption}>
                <span>Table II.a</span>
                <span>Listing process — old way versus the Folio Method</span>
              </figcaption>
              <table className={s.ruledTable}>
                <thead>
                  <tr>
                    <th scope="col" className={s.colIndex}>&nbsp;</th>
                    <th scope="col">{copy.howItWorks.oldWay.label}</th>
                    <th scope="col" className={s.colAccent}>{copy.howItWorks.safeWay.label}</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({
                    length: Math.max(
                      copy.howItWorks.oldWay.steps.length,
                      copy.howItWorks.safeWay.steps.length,
                    ),
                  }).map((_, i) => (
                    <tr key={`row-${i}`}>
                      <th scope="row" className={s.colIndex}>{String(i + 1).padStart(2, "0")}</th>
                      <td>{copy.howItWorks.oldWay.steps[i] ?? <span className={s.tableEm}>&mdash;</span>}</td>
                      <td className={s.colAccent}>
                        {copy.howItWorks.safeWay.steps[i] ?? <span className={s.tableEm}>&mdash;</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className={s.colIndex}>R</th>
                    <td className={s.tableResult}>{copy.howItWorks.oldWay.result}</td>
                    <td className={`${s.tableResult} ${s.colAccent}`}>{copy.howItWorks.safeWay.result}</td>
                  </tr>
                </tfoot>
              </table>
            </figure>

            <div className={s.methodDivide}>
              <p className={s.thesisDivideMark}>&sect; II.b</p>
              <h3 className={s.folioH3}>{copy.aiDifference.h2}</h3>
            </div>

            <figure className={s.tableFigure}>
              <figcaption className={s.tableCaption}>
                <span>Table II.b</span>
                <span>Title research infrastructure compared</span>
              </figcaption>
              <table className={s.ruledTable}>
                <thead>
                  <tr>
                    <th scope="col" className={s.colIndex}>&nbsp;</th>
                    <th scope="col">{copy.aiDifference.traditional.label}</th>
                    <th scope="col" className={s.colAccent}>{copy.aiDifference.ai.label}</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({
                    length: Math.max(
                      copy.aiDifference.traditional.steps.length,
                      copy.aiDifference.ai.steps.length,
                    ),
                  }).map((_, i) => (
                    <tr key={`ai-row-${i}`}>
                      <th scope="row" className={s.colIndex}>{String(i + 1).padStart(2, "0")}</th>
                      <td>{copy.aiDifference.traditional.steps[i] ?? <span className={s.tableEm}>&mdash;</span>}</td>
                      <td className={s.colAccent}>
                        {copy.aiDifference.ai.steps[i] ?? <span className={s.tableEm}>&mdash;</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </figure>

            <div className={s.thesisGridLower}>
              <aside className={s.marginalia} aria-label="Editor's note">
                <p className={s.marginaliaLabel}>Note 03</p>
                <p>Human review remains the final check. The instrument accelerates discovery — it does not replace counsel.</p>
              </aside>
              <div className={s.thesisBody}>
                {copy.aiDifference.supporting.map((p) => (<p key={p}>{p}</p>))}
                <p>
                  <a href="#exhibits" className={s.linkArrow}>{copy.aiDifference.cta}</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FOLIO III — THE EXHIBITS (testimony + case studies + plate)
            ============================================================ */}
        <section id="exhibits" className={s.folio} aria-labelledby="folio-iii-title">
          <div className={s.folioInner}>
            <header className={s.folioHead}>
              <p className={s.folioNum}>Folio 03 / {FOLIO_TOTAL}</p>
              <p className={s.folioTitle}>The Exhibits</p>
              <p className={s.folioMeta}>Testimony &middot; record of work</p>
            </header>

            <h2 id="folio-iii-title" className={s.folioH2}>
              <em>{copy.unfairAdvantage.h2}</em>
            </h2>

            <figure className={s.testimonyFrame}>
              <p className={s.testimonyMark}>Exhibit 0 &middot; Counterfactual</p>
              <blockquote className={s.testimonyQuote}>
                {copy.unfairAdvantage.quote}
              </blockquote>
              <div className={s.testimonyBody}>
                {copy.unfairAdvantage.body.map((p) => (<p key={p}>{p}</p>))}
              </div>
            </figure>

            <div className={s.exhibitsIntro}>
              <p className={s.thesisDivideMark}>&sect; III.b</p>
              <h3 className={s.folioH3}>{copy.socialProof.h2}</h3>
              <p className={s.thesisSub}>{copy.socialProof.intro}</p>
            </div>

            <ol className={s.exhibitList}>
              {copy.socialProof.testimonials.map((t, i) => {
                const letter = String.fromCharCode(65 + i);
                return (
                  <li key={t.name} className={s.exhibit}>
                    <p className={s.exhibitLabel}>
                      <span>Exhibit {letter}</span>
                      <span className={s.exhibitDot} aria-hidden>&middot;</span>
                      <span>{t.role}</span>
                    </p>
                    <blockquote className={s.exhibitQuote}>{t.quote}</blockquote>
                    <p className={s.exhibitAttr}>
                      <span className={s.exhibitName}>{t.name}</span>
                      {t.placeholder ? (
                        <span className={s.placeholderBadge}>Placeholder testimony</span>
                      ) : null}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div className={s.platePlacement}>
              <figure className={s.exhibitPlate}>
                <div className={s.exhibitPlateImage}>
                  <ImageSlot
                    src="/assets/C1.png"
                    alt=""
                    ratio="4/3"
                    objectPosition="center"
                    tone="light"
                    kind="supporting"
                    caption="Plate I — coastal causeway, Gulf side, 2025"
                    prompt={`Archival sepia-toned photograph of a Florida causeway over the Gulf at blue hour. Printed-archive treatment, hairline border. Used as Exhibit Plate I in a high-end legal-financial prospectus.`}
                  />
                </div>
                <figcaption className={s.exhibitPlateCap}>
                  <span className={s.plateNum}>Pl. 01</span>
                  <span>Coastal Causeway, FL &middot; Gulf Side, 2025</span>
                  <span className={s.plateNote}>Reference plate</span>
                </figcaption>
              </figure>

              <div className={s.casesBlock}>
                <p className={s.thesisDivideMark}>&sect; III.c</p>
                <h3 className={s.folioH3}>{copy.caseStudies.h2}</h3>
                <ol className={s.caseLedger}>
                  {copy.caseStudies.cases.map((c, i) => {
                    const letter = String.fromCharCode(65 + i);
                    return (
                      <li key={c.property} className={s.caseEntry}>
                        <p className={s.caseLabel}>
                          <span>Exhibit {letter}</span>
                          <span className={s.exhibitDot} aria-hidden>&middot;</span>
                          <span>{c.property}</span>
                        </p>
                        <dl className={s.caseDl}>
                          <dt>Issue</dt><dd>{c.issue}</dd>
                          {"discovered" in c && c.discovered ? (
                            <>
                              <dt>Discovered</dt>
                              <dd>{c.discovered}</dd>
                            </>
                          ) : null}
                          <dt>Resolution</dt><dd>{c.resolved}</dd>
                          <dt>Result</dt><dd className={s.caseResult}>{c.result}</dd>
                        </dl>
                      </li>
                    );
                  })}
                </ol>
                <p>
                  <a href="#subscription" className={s.linkArrow}>{copy.caseStudies.cta}</a>
                </p>
              </div>
            </div>

            <ul className={s.exhibitsTrustRow} aria-label="Trust strip">
              {copy.socialProof.trustRow.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </div>
        </section>

        {/* ============================================================
            FOLIO IV — THE INSTRUMENT (offer terms + capacity stamp + plate)
            ============================================================ */}
        <section id="instrument" className={s.folio} aria-labelledby="folio-iv-title">
          <div className={s.folioInner}>
            <header className={s.folioHead}>
              <p className={s.folioNum}>Folio 04 / {FOLIO_TOTAL}</p>
              <p className={s.folioTitle}>The Instrument</p>
              <p className={s.folioMeta}>Terms &middot; capacity</p>
            </header>

            <h2 id="folio-iv-title" className={s.folioH2}>
              <em>{copy.included.h2}</em>
            </h2>

            <div className={s.instrumentGrid}>
              {copy.included.groups.map((g, i) => (
                <article key={g.label} className={s.instrumentArticle}>
                  <p className={s.instrumentNum}>{String(i + 1).padStart(2, "0")}</p>
                  <p className={s.instrumentLabel}>{g.label}</p>
                  <ul className={s.instrumentList}>
                    {g.items.map((it) => (<li key={it}>{it}</li>))}
                  </ul>
                </article>
              ))}
            </div>

            <figure className={s.termsFigure}>
              <figcaption className={s.tableCaption}>
                <span>Schedule IV.a</span>
                <span>Terms of the instrument</span>
              </figcaption>
              <table className={s.ruledTable}>
                <tbody>
                  <tr>
                    <th scope="row" className={s.colIndex}>i.</th>
                    <td>Total value</td>
                    <td className={s.colAccent}>{copy.included.totalValue}</td>
                  </tr>
                  <tr>
                    <th scope="row" className={s.colIndex}>ii.</th>
                    <td>If the listing sells</td>
                    <td className={s.colAccent}>{copy.included.ifSells}</td>
                  </tr>
                  <tr>
                    <th scope="row" className={s.colIndex}>iii.</th>
                    <td>If the listing does not sell</td>
                    <td className={`${s.colAccent} ${s.tableResult}`}>{copy.included.ifNotSells}</td>
                  </tr>
                </tbody>
              </table>
            </figure>

            <div className={s.capacityBlock}>
              <figure className={s.exhibitPlate} data-tone="instrument">
                <div className={s.exhibitPlateImage}>
                  <ImageSlot
                    src="/assets/C2.png"
                    alt=""
                    ratio="3/4"
                    objectPosition="center"
                    tone="light"
                    kind="supporting"
                    caption="Plate II — instrument interior, Sarasota, 2025"
                    prompt={`Archival sepia-toned architectural detail of a modernist Florida interior — polished concrete and bronze door handle. Printed-archive treatment, hairline border. Used as Exhibit Plate II in a high-end legal-financial prospectus.`}
                  />
                </div>
                <figcaption className={s.exhibitPlateCap}>
                  <span className={s.plateNum}>Pl. 02</span>
                  <span>Instrument Interior &middot; Sarasota, 2025</span>
                  <span className={s.plateNote}>Reference plate</span>
                </figcaption>
              </figure>

              <aside className={s.capacityStamp} aria-label="Capacity statement">
                <p className={s.capacityMark}>Notice IV.b</p>
                <p className={s.capacityHeadline}>{copy.limitedOnboarding.h2}</p>
                <div className={s.capacityBody}>
                  {copy.limitedOnboarding.body.map((p) => (<p key={p}>{p}</p>))}
                </div>
                <p className={s.capacityStampMark}>Enrollment closed E.O.M.</p>
                <p>
                  <a href="#subscription" className={s.linkArrow}>{copy.limitedOnboarding.cta}</a>
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================
            FOLIO V — SUBSCRIPTION (final CTA + appendices)
            ============================================================ */}
        <section id="subscription" className={s.folio} aria-labelledby="folio-v-title">
          <div className={s.folioInner}>
            <header className={s.folioHead}>
              <p className={s.folioNum}>Folio 05 / {FOLIO_TOTAL}</p>
              <p className={s.folioTitle}>Subscription</p>
              <p className={s.folioMeta}>Enroll &middot; appendices</p>
            </header>

            <h2 id="folio-v-title" className={s.folioH2}>
              <em>{copy.finalCta.h2}</em>
            </h2>

            <div className={s.subscriptionLayout}>
              <DemoForm className={s.subscriptionCard}>
                <header className={s.subscriptionCardHead}>
                  <span>Subscription Card</span>
                  <span>Form S-01</span>
                </header>
                <p className={s.subscriptionCardLabel}>{copy.finalCta.options[0].label}</p>
                <div className={s.subscriptionFields}>
                  {copy.finalCta.options[0].fields?.map((f) => (
                    <label key={f} className={s.field}>
                      <span>{f}</span>
                      <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                    </label>
                  ))}
                </div>
                <button type="submit" className={s.btnPrimary}>{copy.finalCta.options[0].cta}</button>
                <p className={s.subscriptionSupport}>{copy.finalCta.options[0].supporting}</p>
              </DemoForm>

              <aside className={s.subscriptionAlt} aria-label="Alternative steps">
                <p className={s.subscriptionAltLabel}>Alternative routes</p>
                <ol className={s.subscriptionAltList}>
                  {copy.finalCta.options.slice(1).map((o, i) => (
                    <li key={o.label}>
                      <span className={s.subscriptionAltNum}>{String(i + 2).padStart(2, "0")}</span>
                      <a href="#" className={s.linkArrow}>{o.cta}</a>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>

            <div className={s.appendices}>
              <section className={s.appendix} aria-labelledby="appendix-a">
                <header className={s.appendixHead}>
                  <p className={s.thesisDivideMark}>Appendix A</p>
                  <h3 id="appendix-a" className={s.folioH3}>{copy.faq.h2}</h3>
                </header>
                <dl className={s.appendixList}>
                  {copy.faq.items.map((q, i) => (
                    <div key={q.q} className={s.appendixRow}>
                      <dt>
                        <span className={s.appendixNum}>{String(i + 1).padStart(2, "0")}.</span>
                        {q.q}
                      </dt>
                      <dd>{q.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className={s.appendix} aria-labelledby="appendix-b">
                <header className={s.appendixHead}>
                  <p className={s.thesisDivideMark}>Appendix B</p>
                  <h3 id="appendix-b" className={s.folioH3}>{copy.guarantees.h2}</h3>
                </header>
                <ol className={s.guaranteeLedger}>
                  {copy.guarantees.items.map((g, i) => (
                    <li key={g}>
                      <span className={s.guaranteeNum}>{String(i + 1).padStart(2, "0")}</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ol>
                <p className={s.guaranteeFinal}>{copy.guarantees.final}</p>
              </section>
            </div>

            <footer className={s.colophonFoot} aria-label="Colophon">
              <div className={s.coverSigil} aria-hidden>
                <span className={s.coverSigilRing}>CT</span>
                <span className={s.coverSigilStamp}>EST. MMXXIV</span>
              </div>
              <p>{copy.brand.legal} &middot; {copy.brand.location} &middot; Vol. 01 &middot; Ed. 01</p>
            </footer>
          </div>
        </section>

      </main>
      <StickyCTA />
      <Footer />
    </>
  );
}
