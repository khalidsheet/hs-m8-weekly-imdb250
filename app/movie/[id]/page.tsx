import { AddToFavAction } from "@/app/components/fav/AddToFavAction";
import { getOneMovie } from "@/app/data/movies";
import { storage } from "@/app/utils/store";
import Image from "next/image";

const MovieDetails = async ({ params }: any) => {
  const { id } = params;

  const movieData = await getOneMovie(id);

  return (
    <div className="movie-details p-4 py-8 flex">
      <Image
        className="bg-image"
        src={movieData.image_url}
        alt={movieData.name}
        width={100}
        height={313}
      />
      <div className="single-details">
        <Image
          className="rounded-lg min-h-[200px] min-w-[360px]"
          src={movieData.image_url}
          width={360}
          height={200}
          alt={movieData.name}
          placeholder={"empty"}
          blurDataURL={movieData.thumb_url}
        />
      </div>
      <div className="ml-4 flex flex-col">
        <h1 className="text-3xl font-bold">
          {movieData.year} {movieData.name}
        </h1>
        <div className="genre block w-full my-2">
          <div>
            {movieData.genre.map((genre, i) => (
              <div
                className="float-left mr-2 bg-gray-900 py-1 px-3 rounded-full text-gray-400 uppercase text-sm"
                key={i}
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
        <div className="details block w-full">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff000"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff000"
              className="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span className="ml-1 w-full">{movieData.rating}</span>
          </div>
          <div className="actors block mt-3">
            Actors: {movieData.actors.join(", ")}
          </div>
          <div className="actors block mt-3">
            Directors: {movieData.directors.join(", ")}
          </div>
          <div className="description mt-7">
            <div className="uppercase font-bold text-sm text-gray-400">
              description
            </div>
            {movieData.desc}
          </div>
          <div className="mt-6">
            <AddToFavAction movie={movieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
