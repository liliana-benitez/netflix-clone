import type { Dispatch, SetStateAction } from "react"

export interface Movie {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface TVShow {
  adult: boolean
  backdrop_path: string
  id: number
  name: string
  original_name: string
  overview: string
  poster_path: string
  media_type: string
  original_language: string
  genre_ids: number[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: string[]
}

export type ListProps =
  | {
      data: Movie[]
      type: "movie"
    }
  | {
      data: TVShow[]
      type: "tv"
    }
  | {
      data: (Movie | TVShow)[]
      type: "watchlist"
    }

export type ListItemProps = {
  path: string
  titleType: string
  item: Movie | TVShow
}

export type HeroProps = {
  movie: Movie
}

export type WatchlistContextType = [
  (Movie | TVShow)[],
  Dispatch<SetStateAction<(Movie | TVShow)[]>>
]
