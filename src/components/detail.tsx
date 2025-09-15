import { useParams } from "react-router"
import MoviesAPI from "../utils/tmdb-api"
import { useEffect, useState } from "react"
import { IMG_BASE_URL } from "../utils/constants"
import type { Movie, TVShow } from "../utils/types"
import moment from "moment"

export default function Detail() {
  const [item, setItem] = useState<Movie | TVShow | null>(null)
  const { type, id } = useParams<{ type: "movie" | "tv"; id: string }>()

  useEffect(() => {
    if (!id) return
    ;(async () => {
      if (type === "movie") {
        const movieDetails = await MoviesAPI.getMovie(Number(id))
        setItem(movieDetails)
      } else {
        const tvDetails = await MoviesAPI.getTVShow(Number(id))
        setItem(tvDetails)
      }
    })()
  }, [id, type])

  if (!item) {
    return <p>Loading…</p>
  }

  const isMovie = type === "movie"
  const title = isMovie ? (item as Movie).title : (item as TVShow).name
  const date = isMovie
    ? (item as Movie).release_date
    : (item as TVShow).first_air_date

  return (
    <div>
      <img src={`${IMG_BASE_URL}/${item.backdrop_path}`} alt="Backdrop" />
      <p>{title}</p>
      <p>Out {date ? moment(date).format("dddd MMM Do") : "Date unknown"}</p>
      <p>{item.overview}</p>
    </div>
  )
}
