import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="h-screen text-white relative"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-12 pt-40 max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            {movie?.title || movie?.name}
          </h1>
          <p className="text-gray-200 mb-6 line-clamp-3">
            {movie?.overview}
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded font-bold flex hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              Play
            </button>
            <button className="bg-neutral-700 px-6 py-2 rounded flex hover:bg-neutral-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-black to-transparent" />
    </header>
  );
};

export default Banner;
