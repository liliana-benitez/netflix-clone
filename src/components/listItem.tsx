import { IMG_BASE_URL } from "../utils/constants"
import type { ListItemProps } from "../utils/types"
import WatchlistButton from "./watchlistButton"

export default function ListItem({ path, titleType, item }: ListItemProps) {
  return (
    <div>
      <div className="w-[250px] flex flex-col">
        <div className="relative">
          <img className="h-[150px]" src={`${IMG_BASE_URL}/${path}`} />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-0 w-full">
            <div className="flex justify-between px-2 pb-2 items-end">
              <p className="text-shadow-lg font-semibold">{titleType}</p>
              <WatchlistButton item={item} type="list" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
