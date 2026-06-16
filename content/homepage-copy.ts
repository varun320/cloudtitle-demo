/**
 * Cloud Title — Homepage Copy
 *
 * VERBATIM from:
 *   ../cloud-title-website/briefs-from-thomas/
 *     Complete Homepage Copy – Divi Implementation Version.docx
 *
 * Hard rules (from project CLAUDE.md):
 * 1. Verbatim — never paraphrase. Edits require Mohammad/Thomas sign-off.
 * 2. Guarantee + legal language locked.
 * 3. Statistics carry "Based on internal averages" label where applicable.
 * 4. CTAs use placeholder hrefs ("#") in the demo. Real CTAs wire to
 *    GoHighLevel during the Divi build.
 */

export const copy = {
  brand: {
    name: "Cloud Title",
    legal: "Cloud Title LLC",
    location: "Florida",
  },

  hero: {
    eyebrow: "Florida’s #1 AI-Powered Title Agency",
    h1: "The Secret Weapon Top Agents Use To Win Listings In 2026",
    /**
     * Structured H1 parts for concepts that want typographic emphasis
     * (italic accent on the verb phrase, brand colour on the year).
     * Concepts not needing this fall back to `h1` above.
     */
    h1Parts: [
      { text: "The Secret Weapon " },
      { text: "Top Agents Use", emphasis: "italic" as const },
      { text: " To Win Listings In " },
      { text: "2026", emphasis: "year" as const },
    ],
    sub: "Pre-clear title before you get offers. Close in 10 days instead of 30. Win more listing presentations. Pay nothing if it doesn’t sell.",
    primaryCta: "Get My Free Listing Advantage",
    secondaryCta: "Watch 2-Minute Demo",
    trust: [
      "⭐⭐⭐⭐⭐ Rated 4.9/5 by Florida agents",
      "Underwritten by Fidelity & First American",
      "$127M+ Closed in 2025",
    ],
  },

  /**
   * Trust trio for above-the-fold use — promoted to a real tile per
   * `references/analysis.md` "non-negotiable" rule. Each tile has a primary
   * line (the asset) and a secondary line (the evidence). Used by all 3
   * concepts; visual treatment differs per concept.
   */
  trustTrio: [
    {
      kind: "underwriters" as const,
      label: "Underwritten by",
      values: ["Fidelity National Title", "First American Title"],
    },
    {
      kind: "rating" as const,
      label: "Florida-agent rating",
      value: "4.9 / 5",
      sub: "Based on internal averages",
    },
    {
      kind: "volume" as const,
      label: "Closed in 2025",
      value: "$127M+",
      sub: "Based on internal averages",
    },
    {
      kind: "coverage" as const,
      label: "Florida coverage",
      value: "67 / 67 counties",
      sub: "Licensed statewide — Miami-Dade · Broward · Palm Beach · Collier · Hillsborough · Pinellas",
    },
  ],

  patternInterrupt: {
    h2: "Title Issues Will Cost Florida Agents Millions In Lost Commissions This Year",
    body: [
      "Last month, a $2.1M deal collapsed at day 28.",
      "The reason?",
      "A judgment lien from years ago that no one discovered until after contract.",
      "The agent lost the commission.",
      "The seller lost their next purchase.",
      "The buyer walked away.",
      "One proactive title search could have prevented all of it.",
      "The truth?",
      "Most title companies only look for problems after you already have a contract.",
      "By then, it’s too late.",
    ],
    cta: "Show Me How Safe Listing™ Works",
  },

  safeListing: {
    h2: "Introducing Safe Listing™: The Title Insurance Policy For Your Commission",
    sub: "The industry’s first proactive title protection system that finds and fixes problems before you ever get an offer.",
    benefits: [
      "Title pre-cleared before you go under contract",
      "Faster closings (based on internal averages)",
      "Win listing presentations with confidence",
      "Eliminate surprise delays at day 25",
      "Zero cost if your listing doesn’t sell",
    ],
    supporting: [
      "Instead of discovering title issues after contract — when your commission is at risk — Safe Listing™ uses AI-powered title intelligence to identify and resolve issues immediately when you take the listing.",
      "You launch knowing the property is clean.",
    ],
  },

  howItWorks: {
    h2: "From “Fingers Crossed” To “Title Pre-Cleared” In 48 Hours",
    oldWay: {
      label: "Old Way",
      steps: [
        "Day 1: List property",
        "Day 25–35: Receive contract",
        "Day 30+: Title search ordered",
        "Days later: Major lien discovered",
        "Weeks of stress, delay, renegotiation",
        "Risk of deal collapse",
      ],
      result: "Uncertainty. Delays. Lost credibility.",
    },
    safeWay: {
      label: "Safe Listing™ Way",
      steps: [
        "Day 1: Listing taken",
        "Day 1: AI-powered title search initiated",
        "Day 3: Full title analysis delivered",
        "Day 3–7: Issues resolved proactively",
        "Contract accepted",
        "24-hour title commitment issued",
        "On-time closing",
      ],
      result: "Confidence. Speed. Commission protected.",
    },
    cta: "Start My First Safe Listing",
  },

  aiDifference: {
    h2: "Why Our AI-Powered Title System Finds Problems Earlier",
    traditional: {
      label: "Traditional Title Process",
      steps: [
        "Manual research",
        "Sequential county searches",
        "Reactive after contract",
        "7–10 business days for results",
      ],
    },
    ai: {
      label: "Cloud Title AI Process",
      steps: [
        "Parallel multi-county record analysis",
        "Pattern recognition across name variations",
        "Cross-database verification",
        "Proactive pre-contract review",
        "48-hour results (based on internal averages)",
      ],
    },
    supporting: [
      "We don’t replace human expertise.",
      "We enhance it.",
      "Our AI-driven infrastructure accelerates analysis, increases detection accuracy, and allows our team to resolve issues before they threaten your closing timeline.",
    ],
    cta: "See AI Search Visualization",
  },

  unfairAdvantage: {
    h2: "What Happens When You’re The Only Agent Who Can Say This:",
    quote:
      "“This property has already been title pre-cleared by Cloud Title. There are no hidden liens, no defects, no surprises. We can close faster and with confidence.”",
    body: [
      "Imagine saying that during your next listing presentation.",
      "While competitors explain why title takes 30 days and “sometimes there are delays,” you’re explaining why your listing is the safest and fastest option in the market.",
      "Who wins that listing?",
    ],
  },

  included: {
    h2: "Everything You Get With Safe Listing™",
    groups: [
      {
        label: "Title Protection",
        items: [
          "Complete AI-powered title search",
          "Multi-county lien search",
          "Permit & code verification",
          "Proactive issue resolution",
          "24-hour commitment after contract",
        ],
      },
      {
        label: "Marketing Advantage",
        items: [
          "“Safe Listing Certified” badge",
          "Custom co-branded marketing graphics",
          "Social promotion through Cloud Title channels",
          "Email exposure to our agent network",
        ],
      },
      {
        label: "Performance Guarantees",
        items: [
          "Zero cost if listing doesn’t sell",
          "24-hour commitment speed guarantee",
          "If we miss something, we fix it",
          "Transparent pricing",
        ],
      },
    ],
    totalValue: "Substantial protection and marketing leverage.",
    ifSells: "Standard title fee at closing.",
    ifNotSells: "$0.",
    cta: "Protect My Next Listing",
  },

  socialProof: {
    h2: "Why Hundreds of Florida Agents Use Safe Listing™",
    intro:
      "Agents across Florida trust Cloud Title to protect their closings and enhance their listing presentations.",
    /**
     * Placeholder testimonials — clearly marked, NOT yet client-supplied.
     * Brief Section 8 says "[Insert testimonial grid module here.]" — real
     * quotes will come from Thomas in the Divi build phase. These are
     * directionally accurate so concept layouts can be evaluated.
     */
    testimonials: [
      {
        quote:
          "Cloud Title turned every listing presentation into a closing call. The Safe Listing badge does the heavy lifting before I even open my mouth.",
        name: "Maria L.",
        role: "Realtor · Coral Gables",
        placeholder: true,
      },
      {
        quote:
          "Pre-clearing title at Day 1 changed how I price. I’m no longer guessing what comes out in the search at week three.",
        name: "James K.",
        role: "Broker · Naples",
        placeholder: true,
      },
      {
        quote:
          "Twenty-eight closings with Cloud Title. Zero surprises. Their AI catches what my last title company missed by week three.",
        name: "Sofia R.",
        role: "Realtor · Tampa Bay",
        placeholder: true,
      },
    ],
    trustRow: [
      "Florida Title Agency",
      "Underwritten by First American & Fidelity",
      "Member: Florida Land Title Association",
      "4.9/5 Google Rating",
    ],
  },

  caseStudies: {
    h2: "Real Listings. Real Problems. Real Results.",
    cases: [
      {
        property: "$850K Home – St. Petersburg",
        issue: "Unrecorded mortgage satisfaction",
        discovered: "Day 2 of listing",
        resolved: "Before first offer",
        result: "Closed 11 days after contract",
      },
      {
        property: "$1.2M Waterfront – Naples",
        issue: "Probate incomplete",
        resolved: "Resolved before accepting offers",
        result: "Closed on time",
      },
    ],
    cta: "Start My Safe Listing Today",
  },

  faq: {
    h2: "Everything You’re Wondering (Answered)",
    items: [
      {
        q: "What if my listing doesn’t sell?",
        a: "You pay nothing. We absorb the cost of the proactive title search.",
      },
      {
        q: "Is this RESPA compliant?",
        a: "Yes. Buyers retain full freedom to choose their own title company.",
      },
      {
        q: "Do you serve my area?",
        a: "We are licensed in all 67 Florida counties.",
      },
      {
        q: "What happens at closing?",
        a: "We issue title insurance as your chosen title agency and close under standard Florida title rates.",
      },
      {
        q: "What if I already have a title partner?",
        a: "You can still use Safe Listing™ to pre-clear and maintain flexibility.",
      },
    ],
  },

  limitedOnboarding: {
    h2: "Why Forward-Thinking Agents Are Adopting Safe Listing™ Now",
    body: [
      "To maintain service quality and resolution speed, we limit the number of new agents onboarded each month.",
      "The earlier you implement Safe Listing™, the faster you gain the listing advantage.",
    ],
    cta: "Reserve My Spot",
  },

  finalCta: {
    h2: "Choose Your Next Step:",
    options: [
      {
        label: "Start Your First Safe Listing",
        cta: "Get My Free Title Pre-Clearance",
        supporting:
          "We’ll contact you within 2 business hours to confirm and initiate the search.",
        fields: ["Property Address", "Your Name", "Email", "Phone", "MLS # (optional)"],
      },
      { label: "Submit Rush Title Order", cta: "Submit Rush Title Order" },
      { label: "Watch 5-Minute Demo", cta: "Watch 5-Minute Demo" },
      { label: "Schedule 15-Minute Call", cta: "Schedule 15-Minute Call" },
    ],
  },

  guarantees: {
    h2: "You’re Protected By The Industry’s Strongest Guarantees",
    items: [
      "Zero Risk Guarantee",
      "Speed Guarantee",
      "Accuracy Guarantee",
      "Transparency Guarantee",
    ],
    final:
      "You have nothing to lose — and a significant competitive advantage to gain.",
  },

  stickyCta: {
    label: "Start Safe Listing",
    href: "#start",
  },
} as const;

export type HomepageCopy = typeof copy;
