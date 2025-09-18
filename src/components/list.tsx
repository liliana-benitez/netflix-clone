import { NavLink } from "react-router"
import type { ListProps, Movie, TVShow } from "../utils/types"
import ListItem from "./listItem"

function isMovie(item: Movie | TVShow): item is Movie {
  return "title" in item
}

export default function List(props: ListProps) {
  if (props.type === "movie") {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">Movies</h1>
        <ul className="flex gap-2 overflow-scroll">
          {props.data.map((item) => (
            <li key={item.id}>
              <NavLink to={`/movie/${item.id}`}>
                <ListItem
                  path={item.backdrop_path}
                  titleType={item.title}
                  item={item}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (props.type === "tv") {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-xl">TV Shows</h1>
        <ul className="flex gap-2 overflow-scroll">
          {props.data.map((item) => (
            <li key={item.id}>
              <NavLink to={`/tv/${item.id}`}>
                <ListItem
                  path={item.backdrop_path}
                  titleType={item.name}
                  item={item}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // watchlist: (Movie|TVShow)[]
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Watchlist</h1>
      <ul className="flex gap-2 overflow-scroll">
        {props.data.map((item) => (
          <li key={item.id}>
            <NavLink to={`/watchlist/${item.id}`}>
              <ListItem
                path={item.backdrop_path}
                titleType={isMovie(item) ? item.title : item.name}
                item={item}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
