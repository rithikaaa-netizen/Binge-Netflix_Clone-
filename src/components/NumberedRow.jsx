import { useEffect, useState } from "react"
import axios from "../axios"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const NumberedRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl)
      setMovies(response.data.results.slice(0, 10))
    }
    fetchData()
  }, [fetchUrl])

  return (
    <section className="px-8 py-8">
      <h2 className="text-white text-3xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex gap-6 overflow-x-scroll overflow-y-visible py-6 no-scrollbar">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="relative shrink-0 flex items-end hover:scale-110 transition">
            <span className="absolute h-full  text-9xl  font-extrabold text-outline-white">
              {index + 1}
            </span>
            <img
              className="w-44 h-64 object-cover rounded-md ml-8"
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default NumberedRow
