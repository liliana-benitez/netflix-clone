import type { Movie, TVShow, watchlistButtonProps } from "@/utils/types"
import { useWatchlist } from "@/utils/useWatchlist"
import type { SyntheticEvent } from "react"

export default function WatchlistButton({ item }: watchlistButtonProps) {
  const [watchlist, setWatchlist] = useWatchlist()

  function toggleWatchlist(e: SyntheticEvent, item: Movie | TVShow) {
    e.preventDefault()

    let itemExists = false

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === item.id) {
        itemExists = true
      }
    }

    if (itemExists) {
      for (let i = 0; i < watchlist.length; i++) {
        if (watchlist[i].id === item.id) watchlist.splice(i, 1)
      }
      setWatchlist([...watchlist])
    } else {
      setWatchlist([...watchlist, item])
    }
  }

  return (
    <button
      onClick={(e) => {
        toggleWatchlist(e, item)
      }}
      className="font-semibold text-shaow-lg"
    >
      +
    </button>
  )
}
