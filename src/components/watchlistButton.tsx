import { Button } from "./ui/button"
import type { Movie, TVShow } from "@/utils/types"
import { useWatchlist } from "@/utils/useWatchlist"
import type { SyntheticEvent } from "react"

type watchlistButtonProps = {
  item: Movie | TVShow
}

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
    <Button
      onClick={(e) => {
        toggleWatchlist(e, item)
      }}
    >
      +
    </Button>
  )
}
