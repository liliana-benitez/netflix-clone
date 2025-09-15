import type { ListProps } from "../utils/types"
import ListItem from "./listItem"

export default function List({ data, type }: ListProps) {
  return (
    <div>
      <h1 className="font-semibold text-3xl">
        {type === "movie" ? "Movies" : "TV Shows"}
      </h1>

      <ul className="flex gap-2">
        {type === "movie"
          ? data.map((item) => {
              return (
                <li key={item.id}>
                  <ListItem path={item.backdrop_path} titleType={item.title} />
                </li>
              )
            })
          : data.map((item) => {
              return (
                <li key={item.id}>
                  <ListItem path={item.backdrop_path} titleType={item.name} />
                </li>
              )
            })}
      </ul>
    </div>
  )
}
