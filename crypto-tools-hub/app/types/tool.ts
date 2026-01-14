// /types/tool.ts

export type PricingModel = "Free" | "Freemium" | "Paid"

export type LearningCurve = "Low" | "Medium" | "High"

export type Tool = {
  id: string
  name: string
  slug: string

  category: string

  pricing: {
    model: PricingModel
    startingPrice?: number // USD / month
  }

  supportedChains: string[]
  dataTypes: string[]

  apiAccess: boolean
  exportData: boolean

  learningCurve: LearningCurve

  bestFor: string[] // Trader, Investor, Builder, Beginner...

  website: string
  lastUpdated: string // YYYY-MM-DD
}
