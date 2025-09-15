import type { ListProps } from "../utils/types"

export default function List({ data, type }: ListProps) {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"

  return (
    <div>
      <h1>{type === "movie" ? "Movies" : "TV Shows"}</h1>

      <ul>
        {type === "movie"
          ? data.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <img src={`${IMG_BASE_URL}/${item.backdrop_path}`} />
                    <p>{item.title}</p>
                  </div>
                </li>
              )
            })
          : data.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <img src={`${IMG_BASE_URL}/${item.backdrop_path}`} />
                    <p>{item.name}</p>
                  </div>
                </li>
              )
            })}
      </ul>
    </div>
  )
}
