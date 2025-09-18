import type { Movie, TVShow, WatchlistProviderProps } from "@/utils/types"
import { WatchlistContext } from "@/utils/watchlistContext"
import { useState } from "react"

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
