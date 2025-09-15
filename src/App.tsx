import { useEffect, useState } from "react"
import MoviesAPI from "./utils/tmdb-api"
import List from "./components/list"

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
    <>
      <h1>Netflix</h1>

      <p>Hero Section</p>

      <p>Watchlist</p>

      <List data={movies} type="movie" />

      <List data={shows} type="tv" />
    </>
  )
}

export default App
