"use client";

import { type FormEvent, type ReactNode } from "react";

/** Demo-only form wrapper — swallows submit to keep the URL clean. Real
 * submission wires to GoHighLevel in the Divi build phase (not here). */
export function DemoForm({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
}

