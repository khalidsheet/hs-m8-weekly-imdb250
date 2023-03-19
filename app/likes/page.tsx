"use client";

import { IMovie } from "../types/IMovie";
import { storage } from "../utils/store";
import { Container } from "../components/Container";
import { MovieList } from "../components/movieDetails/movieList";

const Likes = () => {
  const movies = storage<unknown, IMovie[]>() as IMovie[];

  return (
    <Container>
      <h1 className="text-3xl">Movies you liked</h1>
      <MovieList movies={movies || []} />
    </Container>
  );
};

export default Likes;
