import { useContext } from "react"
import type { WatchlistContextType } from "./types"
import { WatchlistContext } from "./watchlistContext"

export function useWatchlist(): WatchlistContextType {
  const context = useContext(WatchlistContext)

  if (!context) {
    throw new Error("useWatchlist must be used inside a WatchlistProvider")
  }

  return context
}
