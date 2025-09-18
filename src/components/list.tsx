import { NavLink } from "react-router"
import type { ListProps } from "../utils/types"
import ListItem from "./listItem"

export default function List({ data, type }: ListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-xl">
        {type === "movie" ? "Movies" : "TV Shows"}
      </h1>

      <ul className="flex gap-2 overflow-scroll">
        {type === "movie"
          ? data.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={`/${type}/${item.id}`}>
                    <ListItem
                      path={item.backdrop_path}
                      titleType={item.title}
                      item={item}
                    />
                  </NavLink>
                </li>
              )
            })
          : data.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={`/${type}/${item.id}`}>
                    <ListItem
                      path={item.backdrop_path}
                      titleType={item.name}
                      item={item}
                    />
                  </NavLink>
                </li>
              )
            })}
      </ul>
    </div>
  )
}
