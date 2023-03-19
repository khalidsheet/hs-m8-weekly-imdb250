"use client";

import { IMovie } from "@/app/types/IMovie";

export interface FiltersProps {
  selectedGenre: string;
  selectedYear: string;
  selectedRating: string;
  years: number[];
  genres: string[];
  movies: IMovie[];
  onGenreChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onRatingChange: (value: string) => void;
}

export const Filters = (props: FiltersProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-x-2">
        <div className="flex flex-col w-full">
          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            id="genre"
            className="w-full h-10 rounded-md bg-stone-800 outline-none border border-gray-700 mb-4 px-4 py-2"
            onChange={(e) => props.onGenreChange(e.target.value)}
          >
            <option value="0">Select</option>
            {props.genres.map((genre, i) => (
              <option key={i} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="year">Year</label>
          <select
            name="year"
            id="year"
            className="w-full h-10 rounded-md bg-stone-800 outline-none border border-gray-700 mb-4 px-4 py-2"
            onChange={(e) => props.onYearChange(e.target.value)}
          >
            <option value="null">Select</option>
            {props.years.map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="rating">Rating</label>
          <select
            name="rating"
            id="rating"
            className="w-full h-10 rounded-md bg-stone-800 outline-none border border-gray-700 mb-4 px-4 py-2"
            onChange={(e) => props.onRatingChange(e.target.value)}
          >
            <option value="null">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};
