import { BASE_URL } from "./constants"

const API_TOKEN = import.meta.env.VITE_TMDB_API_KEY

async function fetchData(url: string) {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

const MoviesAPI = {
  async getMovies() {
    const data = await fetchData(
      `${BASE_URL}/trending/movie/day?api_key=${API_TOKEN}`
    )
    return data.results
  },

  async getTVShows() {
    const data = await fetchData(
      `${BASE_URL}/trending/tv/day?api_key=${API_TOKEN}`
    )
    return data.results
  },

  async getMovie(id: number) {
    return fetchData(`${BASE_URL}/trending/movie/${id}?api_key=${API_TOKEN}`)
  },

  async getTVShow(id: number) {
    return fetchData(`${BASE_URL}/trending/tv/${id}?api_key=${API_TOKEN}`)
  }
}

export default MoviesAPI
