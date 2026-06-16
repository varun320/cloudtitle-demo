import { ConceptShell } from "@/components/shell/ConceptShell";
import { PremiumPage } from "@/components/premium/PremiumPage";

export const metadata = {
  title: "Cloud Title — Premium Direction",
  description:
    "Concept C · Premium minimal: restrained luxury, oversized type, dark hero. Direction preview for the Cloud Title homepage redesign — final build in WordPress + Divi 5.",
  robots: { index: false, follow: false },
};

export default function Premium() {
  return (
    <ConceptShell slug="premium">
      <PremiumPage />
    </ConceptShell>
  );
}
