import type { Movie } from "@/utils/types"
import { WatchlistContext } from "@/utils/watchlistContext"
import { useState, type ReactNode } from "react"

type WatchlistProviderProps = {
  children: ReactNode
}

export default function WatchlistProvider({
  children
}: WatchlistProviderProps) {
  const [watchlist, setWatchlist] = useState<Movie[]>([
    {
      adult: false,
      backdrop_path: "/enNubozHn9pXi0ycTVYUWfpHZm.jpg",
      id: 155,
      title: "The Dark Knight",
      original_title: "The Dark Knight",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [18, 28, 80, 53],
      popularity: 37.0978,
      release_date: "2008-07-16",
      video: false,
      vote_average: 8.523,
      vote_count: 34377
    }
  ])

  return (
    <WatchlistContext.Provider value={[watchlist, setWatchlist]}>
      {children}
    </WatchlistContext.Provider>
  )
}
