"use client";

import { IMovie } from "@/app/types/IMovie";
import { Filters } from "./Filters";

export interface ISearch {
  movies: IMovie[];
  onSearch: (movies: IMovie[]) => void;
}

export const Search = ({ movies, onSearch }: ISearch) => {
  const handleSearch = (value: string) => {
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filtered);
  };

  const handleGenreChange = (value: string) => {
    if (value === "null") return onSearch(movies);

    const filtered = movies.filter((movie) => movie.genre.includes(value));
    onSearch(filtered);
  };

  const handleRatingChange = (value: string) => {
    if (value === "null") return onSearch(movies);

    const filtered = movies.filter((movie) => movie.rating === parseInt(value));
    onSearch(filtered);
  };

  const handleYearChange = (value: string) => {
    if (value === "null") return onSearch(movies);

    const filtered = movies.filter((movie) => movie.year === parseInt(value));
    onSearch(filtered);
  };

  const years = movies
    .map((movie) => movie.year)
    .filter((year, index, self) => self.indexOf(year) === index)
    .sort();

  const genres = movies
    .map((movie) => movie.genre)
    .flat()
    .filter((genre, index, self) => self.indexOf(genre) === index)
    .sort();

  return (
    <div className="flex w-full gap-x-4 items-center">
      <div className="flex-1">
        <label htmlFor="">Search</label>
        <input
          placeholder="Search for a movie..."
          className="w-full h-10 rounded-md bg-stone-800 outline-none border border-gray-700 mb-4 px-4 py-2"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="w-96">
        <Filters
          onGenreChange={handleGenreChange}
          onRatingChange={handleRatingChange}
          onYearChange={handleYearChange}
          years={years}
          genres={genres}
          selectedGenre=""
          selectedRating=""
          selectedYear=""
          movies={movies}
        />
      </div>
    </div>
  );
};
