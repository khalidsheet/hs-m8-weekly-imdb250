import { fetchMovies } from "./data/movies";
import { Container } from "./components/Container";
import { MovieList } from "./components/movieDetails/movieList";

export default async function Home() {
  const movies = await fetchMovies();

  return (
    <Container>
      <h1 className="text-3xl">Top 250 Movie</h1>
      <main>
        <MovieList movies={movies} />
      </main>
    </Container>
  );
}
