import { Suspense } from "react";
import CompareClient from "@/app/compare/CompareClient";

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="p-10">Loading compare...</div>}>
      <CompareClient />
    </Suspense>
  );
}
