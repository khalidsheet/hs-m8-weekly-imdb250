"use client";

import Link from "next/link";
import { MovieDetails } from "./movieDetails";
import { useState } from "react";
import { Search } from "../common/Search";
import { IMovie } from "@/app/types/IMovie";
import { motion } from "framer-motion";
import { storage } from "@/app/utils/store";

const container = {
  hidden: { opacity: 1, scale: 1, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { y: 2, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MovieList = (props: any) => {
  const { movies } = props;
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [likedMovies, setLikedMovies] = useState<IMovie[]>(
    storage() as IMovie[]
  );

  const handleSearch = (value: IMovie[]) => {
    setFilteredMovies([]);
    setFilteredMovies(value);
  };

  const getMovieId = (value: string) => {
    return value.replace(/\/title\//, "");
  };

  return (
    <>
      <div className="flex justify-center mt-4 w-full">
        <Search movies={movies} onSearch={handleSearch} />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
          },
          y: 20,
          scale: 4,
        }}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {filteredMovies.map((movie: IMovie, i: number) => (
          <motion.div key={i + "_" + movie.imdb_url} variants={item}>
            <Link href={`/movie/${getMovieId(movie.imdb_url)}`}>
              <MovieDetails movie={movie} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
