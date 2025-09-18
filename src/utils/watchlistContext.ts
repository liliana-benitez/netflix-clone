import { createContext, type Dispatch, type SetStateAction } from "react"
import type { Movie } from "./types"

type WatchlistContextType = [Movie[], Dispatch<SetStateAction<Movie[]>>]

export const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
)
