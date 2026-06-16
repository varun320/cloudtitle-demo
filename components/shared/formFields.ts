import { type InputHTMLAttributes } from "react";

/**
 * Maps the human-readable field labels from `copy.finalCta.options[0].fields`
 * to real input attributes — proper `type`, `name`, `autoComplete`. Concept
 * pages render `<input {...fieldAttrs(label)} />` so the demo form looks like
 * a real lead-capture form to Thomas, not a string-typed scaffold.
 *
 * Lives in a non-"use client" module so Server Components can call it
 * during render (DemoForm itself is a client component because of onSubmit).
 */
export function fieldAttrs(label: string): InputHTMLAttributes<HTMLInputElement> {
  const l = label.toLowerCase();
  if (l.startsWith("email")) {
    return {
      type: "email",
      name: "email",
      autoComplete: "email",
      inputMode: "email",
      required: true,
      "aria-required": true,
    };
  }
  if (l.startsWith("phone")) {
    return {
      type: "tel",
      name: "phone",
      autoComplete: "tel",
      inputMode: "tel",
      required: true,
      "aria-required": true,
    };
  }
  if (l.startsWith("property")) {
    return {
      type: "text",
      name: "property_address",
      autoComplete: "street-address",
      required: true,
      "aria-required": true,
    };
  }
  if (l.startsWith("your name") || l === "name") {
    return {
      type: "text",
      name: "name",
      autoComplete: "name",
      required: true,
      "aria-required": true,
    };
  }
  if (l.startsWith("mls")) {
    return { type: "text", name: "mls_number", inputMode: "numeric" };
  }
  // Fallback — generic text input
  return { type: "text", name: l.replace(/\s+/g, "_") };
}
