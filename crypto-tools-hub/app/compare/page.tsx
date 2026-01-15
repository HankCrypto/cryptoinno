"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { tools } from "@/app/data/tools"
import type { Tool } from "@/app/types/tool"

export default function ComparePage() {
  const searchParams = useSearchParams()

  // 1️⃣ Read slugs from URL (?tools=dune,glassnode)
  const slugsFromUrl = useMemo(() => {
    const raw = searchParams.get("tools")
    return raw ? raw.split(",") : []
  }, [searchParams])

  // 2️⃣ Local state (editable by user)
  const [leftSlug, setLeftSlug] = useState("")
  const [rightSlug, setRightSlug] = useState("")

  // 3️⃣ Sync URL → state (chạy 1 lần khi load)
  useEffect(() => {
    if (slugsFromUrl.length >= 1) {
      setLeftSlug(slugsFromUrl[0])
    }
    if (slugsFromUrl.length >= 2) {
      setRightSlug(slugsFromUrl[1])
    }
  }, [slugsFromUrl])

  // 4️⃣ Resolve tools
  const leftTool = tools.find((t: Tool) => t.slug === leftSlug)
  const rightTool = tools.find((t: Tool) => t.slug === rightSlug)

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Compare Crypto Tools
      </h1>

      {/* Selectors */}
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

      {/* Empty state */}
      {(!leftTool || !rightTool) && (
        <p className="mt-6 text-gray-500">
          Please select two tools to compare.
        </p>
      )}

      {/* Comparison Table */}
      {leftTool && rightTool && (
        <table className="mt-8 w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">
                Feature
              </th>
              <th className="border p-2">
                {leftTool.name}
              </th>
              <th className="border p-2">
                {rightTool.name}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">Category</td>
              <td className="border p-2">{leftTool.category}</td>
              <td className="border p-2">{rightTool.category}</td>
            </tr>

            <tr>
              <td className="border p-2">Pricing</td>
              <td className="border p-2">
                {leftTool.pricing.model}
              </td>
              <td className="border p-2">
                {rightTool.pricing.model}
              </td>
            </tr>

            <tr>
              <td className="border p-2">Supported Chains</td>
              <td className="border p-2">
                {leftTool.supportedChains.join(", ")}
              </td>
              <td className="border p-2">
                {rightTool.supportedChains.join(", ")}
              </td>
            </tr>

            <tr>
              <td className="border p-2">API Access</td>
              <td className="border p-2">
                {leftTool.apiAccess ? "Yes" : "No"}
              </td>
              <td className="border p-2">
                {rightTool.apiAccess ? "Yes" : "No"}
              </td>
            </tr>

            <tr>
              <td className="border p-2">Export Data</td>
              <td className="border p-2">
                {leftTool.exportData ? "Yes" : "No"}
              </td>
              <td className="border p-2">
                {rightTool.exportData ? "Yes" : "No"}
              </td>
            </tr>

            <tr>
              <td className="border p-2">Learning Curve</td>
              <td className="border p-2">
                {leftTool.learningCurve}
              </td>
              <td className="border p-2">
                {rightTool.learningCurve}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  )
}
