/**
 * Cloud Title — Breakpoints
 *
 * Mobile + tablet are first-class. Tablet (768 portrait, 834 landscape) gets
 * its own QA pass — not just "between mobile and desktop."
 *
 * Source: project CLAUDE.md → "Mobile + tablet are first-class".
 */

export const breakpoints = {
  // Mobile
  xs: 375,   // iPhone SE / mini
  sm: 414,   // iPhone Plus / Pro Max
  // Tablet — explicit first-class pass
  md: 768,   // iPad portrait
  mdl: 834,  // iPad landscape / iPad Pro 11"
  // Desktop
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
  "3xl": 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/** Min-width media query string for use in styled-components / CSS-in-JS. */
export const mq = (bp: Breakpoint) =>
  `(min-width: ${breakpoints[bp]}px)`;

/** QA target widths — every concept must visually pass at all of these. */
export const qaTargets: ReadonlyArray<number> = [
  375, 414, 768, 834, 1024, 1280, 1440, 1920,
] as const;
