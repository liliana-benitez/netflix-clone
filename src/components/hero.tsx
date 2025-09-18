import type { HeroProps } from "../utils/types"
import { IMG_BASE_URL } from "../utils/constants"
import logo from "../assets/netflix-logo.svg"
import { NavLink } from "react-router"
import WatchlistButton from "./watchlistButton"

export default function Hero({ movie }: HeroProps) {
  return (
    <div className="">
      {movie && (
        <div className="relative w-full h-[45vh] lg:h-[75vh]">
          {/* BACKDROP */}
          <img
            className="w-full h-full object-cover object-top"
            src={`${IMG_BASE_URL}/${movie.backdrop_path}`}
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
          <div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

          <div className="absolute bottom-5 z-10 flex flex-col gap-4 px-10">
            <p className="font-semibold text-3xl">{movie.title}</p>
            <p className="text-gray-600 font-semibold">
              {/* Out {date ? moment(date).format("dddd MMM Do") : "Date unknown"} */}
            </p>
            <p className="text-xs sm:w-[400px]">{movie.overview}</p>

            <div className="flex gap-4">
              <NavLink to={`/movie/${movie.id}`}>
                <button className="bg-neutral-700 rounded-md px-2 py-1 opacity-70 hover:cursor-pointer">
                  More Info
                </button>
              </NavLink>
              <WatchlistButton item={movie} type="detail" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
