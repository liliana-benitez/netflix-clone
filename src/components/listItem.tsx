import { IMG_BASE_URL } from "../utils/constants"
import type { ListItemProps } from "../utils/types"

export default function ListItem({ path, titleType }: ListItemProps) {
  return (
    <div>
      <div className="w-[200px]">
        <img src={`${IMG_BASE_URL}/${path}`} />
        <p>{titleType}</p>
      </div>
    </div>
  )
}
