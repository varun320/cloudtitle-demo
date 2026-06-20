import { redirect } from "next/navigation";

export const metadata = {
  title: "Cloud Title — Direction selected",
  description: "Editorial direction selected — redirecting.",
  robots: { index: false, follow: false },
};

/**
 * Client selected Editorial on 2026-06-20. This route now redirects to the
 * single live concept. Source files are preserved on git branch
 * `backup/unselected-concepts-2026-06-21` in case we revisit.
 */
export default function DataForwardRetired() {
  redirect("/editorial");
}
