import { useEffect, useState } from "react"
import MoviesAPI from "./utils/tmdb-api"
import List from "./components/list"
import Hero from "./components/hero"
import { useWatchlist } from "./utils/useWatchlist"

function App() {
  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])
  const [watchlist] = useWatchlist()

  async function fetchData() {
    const movieList = await MoviesAPI.getMovies()
    setMovies(movieList)

    const showList = await MoviesAPI.getTVShows()
    setShows(showList)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg-black text-white h-fit flex flex-col gap-10">
      <Hero movie={movies[0]} />

      <div className="px-10 flex flex-col gap-5">
        {watchlist.length !== 0 && <List data={watchlist} type="watchlist" />}

        <List data={movies.slice(1)} type="movie" />

        <List data={shows} type="tv" />
      </div>
    </div>
  )
}

export default App
