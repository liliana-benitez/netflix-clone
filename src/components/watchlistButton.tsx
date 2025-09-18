import type { Movie, TVShow, watchlistButtonProps } from "@/utils/types"
import { useWatchlist } from "@/utils/useWatchlist"
import type { SyntheticEvent } from "react"

export default function WatchlistButton({ item, type }: watchlistButtonProps) {
  const [watchlist, setWatchlist] = useWatchlist()

  function checkItem(item: Movie | TVShow) {
    let itemExists = false

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === item.id) {
        itemExists = true
      }
    }

    return itemExists
  }

  function toggleWatchlist(e: SyntheticEvent, item: Movie | TVShow) {
    e.preventDefault()

    // let itemExists = false

    // for (let i = 0; i < watchlist.length; i++) {
    //   if (watchlist[i].id === item.id) {
    //     itemExists = true
    //   }
    // }

    if (checkItem(item)) {
      for (let i = 0; i < watchlist.length; i++) {
        if (watchlist[i].id === item.id) watchlist.splice(i, 1)
      }
      setWatchlist([...watchlist])
    } else {
      setWatchlist([...watchlist, item])
    }
  }

  if (type === "list") {
    return (
      <button
        onClick={(e) => {
          toggleWatchlist(e, item)
        }}
        className="font-semibold text-shaow-lg"
      >
        {checkItem(item) ? "✓" : "+"}
      </button>
    )
  }

  if (type === "detail") {
    return (
      <button
        onClick={(e) => {
          toggleWatchlist(e, item)
        }}
        className="bg-neutral-700 rounded-md px-2 py-1 opacity-70"
      >
        {checkItem(item) ? "✓ Remove from watchlist" : " + Add to watchlist"}
      </button>
    )
  }
}
