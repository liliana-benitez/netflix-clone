import { createContext } from "react"
import type { WatchlistContextType } from "./types"

export const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
)
