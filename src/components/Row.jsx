import { useEffect, useState } from "react";
import axios from "../axios";

const IMAGE_URL = "https://image.tmdb.org/t/p/w300";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w780";

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const getGenres = (ids = []) =>
  ids
    .map((id) => GENRE_MAP[id])
    .filter(Boolean)
    .slice(0, 3)
    .join(" • ");

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results || []);
    }
    fetchUrl && fetchData();
  }, [fetchUrl]);

  return (
    <div className="px-8 mb-10">
      <h2 className="text-white text-lg font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-8 relative">
        {movies.map((movie) =>movie.poster_path && (
              <div key={movie.id} className="relative min-w-40 group">
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-40 h-56 rounded-md object-cover"
                />
                <div
                  className="absolute left-1/2 top-20 w-[320px] -translate-x-1/2 -translate-y-24 
                            scale-90 opacity-0 bg-zinc-900 rounded-lg shadow-2xl transition-all 
                            duration-300 delay-200 pointer-events-none group-hover:opacity-100 
                            group-hover:scale-100 group-hover:pointer-events-auto z-50">
                  <img src={`${BACKDROP_URL}${movie.backdrop_path}`} className="w-full h-40 object-cover rounded-t-lg"/>
                  <div className="p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"
                      className="h-6">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                      className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                      className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                      className="justify-center ml-auto h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400">
                      {getGenres(movie.genre_ids)}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
