import { useParams } from "react-router"
import MoviesAPI from "../utils/tmdb-api"
import { useEffect, useState } from "react"
import { IMG_BASE_URL } from "../utils/constants"
import type { Movie, TVShow } from "../utils/types"
import moment from "moment"
import logo from "../assets/netflix-logo.svg"

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
    <div className="bg-black text-white h-screen flex flex-col gap-4">
      {/* BACKDROP + POSTER */}
      <div className="relative w-full h-[50vh]">
        {/* BACKDROP */}
        <img
          className="w-full h-full object-cover object-top"
          src={`${IMG_BASE_URL}/${item.backdrop_path}`}
          alt="Backdrop"
        />

        {/* logo */}
        <img
          className="absolute top-5 left-10 z-10"
          src={logo}
          width={110}
          alt="logo"
        />

        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/100 to-transparent pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/100 to-transparent pointer-events-none" />

        {/* POSTER */}
        <img
          className="absolute bottom-5 left-10 z-10"
          src={`${IMG_BASE_URL}/${item.poster_path}`}
          width={110}
          alt="Poster"
        />
      </div>

      {/* INFO SECTION */}
      <div className="flex flex-col gap-4 px-10">
        <p className="font-semibold text-3xl">{title}</p>
        <p className="text-gray-600 font-semibold">
          Out {date ? moment(date).format("dddd MMM Do") : "Date unknown"}
        </p>
        <p className="text-xs sm:w-[400px]">{item.overview}</p>

        <div className="flex gap-4">
          <button className="bg-gray-800 rounded-md px-2 py-1">
            More Info
          </button>
          <button className="bg-gray-800 rounded-md px-2 py-1">
            + Add to watchlist
          </button>
        </div>
      </div>
    </div>
  )
}
