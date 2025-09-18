import { IMG_BASE_URL } from "../utils/constants"
import type { ListItemProps } from "../utils/types"
import WatchlistButton from "./watchlistButton"

export default function ListItem({ path, titleType, item }: ListItemProps) {
  return (
    <div>
      <div className="w-[200px]">
        <img src={`${IMG_BASE_URL}/${path}`} />
        <p>{titleType}</p>
        <WatchlistButton item={item} />
      </div>
    </div>
  )
}
