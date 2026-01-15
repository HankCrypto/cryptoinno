import { Tool } from "@/app/types/tool"

export default function CompareTable({
  tools,
}: {
  tools: Tool[]
}) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Feature</th>
          {tools.map((t) => (
            <th key={t.id} className="border p-2">
              {t.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <Row label="Category" values={tools.map(t => t.category)} />
        <Row label="Best for" values={tools.map(t => t.bestFor.join(", "))} />
        <Row label="Supported Chains" values={tools.map(t => t.supportedChains.join(", "))} />
        <Row label="API Access" values={tools.map(t => t.apiAccess ? "Yes" : "No")} />
        <Row label="Export Data" values={tools.map(t => t.exportData ? "Yes" : "No")} />
        <Row
  label="Pricing"
  values={tools.map((t) =>
    t.pricing.startingPrice
      ? `${t.pricing.model} ($${t.pricing.startingPrice})`
      : t.pricing.model
  )}
/>

      </tbody>
    </table>
  )
}

function Row({
  label,
  values,
}: {
  label: string
  values: string[]
}) {
  return (
    <tr>
      <td className="border p-2 font-medium">
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} className="border p-2">
          {v}
        </td>
        
      ))}
    </tr>
  )
}
