"use client"

import { create } from "zustand"

type CompareState = {
  selected: string[]
  toggle: (slug: string) => void
  clear: () => void
}

export const useCompareStore = create<CompareState>((set) => ({
  selected: [],
  toggle: (slug) =>
    set((state) => ({
      selected: state.selected.includes(slug)
        ? state.selected.filter((s) => s !== slug)
        : [...state.selected, slug].slice(0, 3), // tối đa 3
    })),
  clear: () => set({ selected: [] }),
}))
