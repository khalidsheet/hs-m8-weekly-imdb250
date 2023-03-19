import { IMovie } from "../types/IMovie";
import { IMDB_URL } from "../utils/constants";

export const fetchMovies = async (): Promise<IMovie[]> => {
  return await (await fetch(IMDB_URL)).json();
};

export const getOneMovie = async (id: string): Promise<IMovie> => {
  const movies = await fetchMovies();
  return movies.filter((movie) => movie.imdb_url.includes(id))[0] ?? {};
};
