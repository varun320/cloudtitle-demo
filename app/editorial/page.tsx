import { ConceptShell } from "@/components/shell/ConceptShell";
import { EditorialPage } from "@/components/editorial/EditorialPage";

export const metadata = {
  title: "Cloud Title — Editorial Direction",
  description:
    "Concept A · Editorial: magazine-style hierarchy, serif display, generous whitespace. Direction preview for the Cloud Title homepage redesign — final build in WordPress + Divi 5.",
  robots: { index: false, follow: false },
};

export default function Editorial() {
  return (
    <ConceptShell slug="editorial">
      <EditorialPage />
    </ConceptShell>
  );
}
