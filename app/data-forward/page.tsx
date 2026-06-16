import { ConceptShell } from "@/components/shell/ConceptShell";
import { DataForwardPage } from "@/components/data-forward/DataForwardPage";

export const metadata = {
  title: "Cloud Title — Data-forward Direction",
  description:
    "Concept B · Data-forward: bento grids, mono-set stats, comparison tables. Direction preview for the Cloud Title homepage redesign — final build in WordPress + Divi 5.",
  robots: { index: false, follow: false },
};

export default function DataForward() {
  return (
    <ConceptShell slug="data-forward">
      <DataForwardPage />
    </ConceptShell>
  );
}
