// /types/tool.ts

export type PricingModel = "Free" | "Freemium" | "Paid"

export type LearningCurve = "Low" | "Medium" | "High"

export type Pricing = {
  model: PricingModel
  startingPrice?: number // USD / month
}

export type Tool = {
  id: string
  name: string
  slug: string

  category: string

  // ✅ CHUẨN HOÁ: pricing là object, không phải string
  pricing: Pricing

  supportedChains: string[]
  dataTypes: string[]

  apiAccess: boolean
  exportData: boolean

  learningCurve: LearningCurve

  bestFor: string[] // Trader, Investor, Builder, Beginner...

  website: string

  // ✅ PHỤC VỤ KIỂM CHỨNG & MINH BẠCH
  lastUpdated: string // YYYY-MM-DD
}
