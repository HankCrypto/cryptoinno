"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { tools } from "@/app/data/tools";
import type { Tool } from "@/app/types/tool";

export default function CompareClient() {
  const searchParams = useSearchParams();

  const [leftSlug, setLeftSlug] = useState("");
  const [rightSlug, setRightSlug] = useState("");

  useEffect(() => {
    const raw = searchParams.get("tools");
    if (!raw) return;

    const slugs = raw.split(",");
    setLeftSlug(slugs[0] || "");
    setRightSlug(slugs[1] || "");
  }, [searchParams]);

  const leftTool = tools.find((t) => t.slug === leftSlug);
  const rightTool = tools.find((t) => t.slug === rightSlug);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Compare Crypto Tools</h1>

      <div className="mt-6 flex gap-4">
        <select
          className="border p-2"
          value={leftSlug}
          onChange={(e) => setLeftSlug(e.target.value)}
        >
          <option value="">Select first tool</option>
          {tools.map((tool) => (
            <option key={tool.id} value={tool.slug}>
              {tool.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2"
          value={rightSlug}
          onChange={(e) => setRightSlug(e.target.value)}
        >
          <option value="">Select second tool</option>
          {tools.map((tool) => (
            <option key={tool.id} value={tool.slug}>
              {tool.name}
            </option>
          ))}
        </select>
      </div>

      {leftTool && rightTool && (
        <table className="mt-8 w-full border text-sm">
          <tbody>
            <tr>
              <td className="border p-2">Category</td>
              <td className="border p-2">{leftTool.category}</td>
              <td className="border p-2">{rightTool.category}</td>
            </tr>
            <tr>
              <td className="border p-2">Pricing</td>
              <td className="border p-2">{leftTool.pricing.model}</td>
              <td className="border p-2">{rightTool.pricing.model}</td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  );
}
