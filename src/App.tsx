import { useEffect, useState } from "react"
import MoviesAPI from "./utils/tmdb-api"
import List from "./components/list"
import logo from "./assets/netflix-logo.svg"
import Hero from "./components/hero"

function App() {
  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])

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
      <img src={logo} width={150} />

      <Hero movie={movies[0]} />

      <p>Watchlist</p>

      <List data={movies.slice(1)} type="movie" />

      <List data={shows} type="tv" />
    </div>
  )
}

export default App
