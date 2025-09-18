import type { Movie, TVShow } from "@/utils/types"
import { WatchlistContext } from "@/utils/watchlistContext"
import { useState, type ReactNode } from "react"

type WatchlistProviderProps = {
  children: ReactNode
}

export default function WatchlistProvider({
  children
}: WatchlistProviderProps) {
  const [watchlist, setWatchlist] = useState<(Movie | TVShow)[]>([])

  return (
    <WatchlistContext.Provider value={[watchlist, setWatchlist]}>
      {children}
    </WatchlistContext.Provider>
  )
}
