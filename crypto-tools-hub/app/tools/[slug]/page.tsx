import { tools } from "@/app/data/tools"
import { Tool } from "@/app/types/tool"

import { notFound } from "next/navigation"

type ToolPageProps = {
  params: {
    slug: string
  }
}

export default function ToolDetailPage({ params }: ToolPageProps) {
  const tool = tools.find(
    (t: Tool) => t.slug === params.slug
  )

  if (!tool) {
    notFound()
  }

  return (
    <main className="p-10 max-w-3xl mx-auto">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">
          {tool.name}
        </h1>

        <p className="mt-2 text-gray-500">
          Category: {tool.category}
        </p>
      </header>

      {/* Core information */}
      <section className="mt-6 space-y-3 text-sm">
        <p>
          <strong>Pricing:</strong>{" "}
          {tool.pricing.model}
          {tool.pricing.startingPrice
            ? ` ($${tool.pricing.startingPrice}/month)`
            : ""}
        </p>

        <p>
          <strong>Supported Chains:</strong>{" "}
          {tool.supportedChains.join(", ")}
        </p>

        <p>
          <strong>Data Types:</strong>{" "}
          {tool.dataTypes.join(", ")}
        </p>

        <p>
          <strong>API Access:</strong>{" "}
          {tool.apiAccess ? "Yes" : "No"}
        </p>

        <p>
          <strong>Export Data:</strong>{" "}
          {tool.exportData ? "Yes" : "No"}
        </p>

        <p>
          <strong>Learning Curve:</strong>{" "}
          {tool.learningCurve}
        </p>

        <p>
          <strong>Best for:</strong>{" "}
          {tool.bestFor.join(", ")}
        </p>
      </section>

      {/* Verification & source */}
      <section className="mt-10 border-t pt-4 text-sm">
        <h2 className="font-semibold mb-2">
          Data Source & Verification
        </h2>

        <p>
          <strong>Official website:</strong>{" "}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {tool.website}
          </a>
        </p>

        <p className="text-gray-500 mt-1">
          Last verified: {tool.lastUpdated}
        </p>

        <p className="text-xs text-gray-400 mt-3">
          Information is collected from official public sources.
          This website acts as an information aggregator and does
          not provide financial advice.
        </p>
      </section>
    </main>
  )
}
