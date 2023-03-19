"use client";

import { IMovie } from "@/app/types/IMovie";
import { storage } from "@/app/utils/store";
import { useEffect, useState } from "react";

export const AddToFavAction = ({ movie }: { movie: IMovie }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedMovies = storage<unknown, IMovie[]>() as IMovie[];
    const liked =
      likedMovies?.find((likedMovie) => {
        return likedMovie.imdb_url === movie.imdb_url;
      }) != null;
    setIsLiked(liked);
  }, [movie, isLiked]);

  const handleFavCTA = () => {
    storage(movie);
    setIsLiked(true);
  };

  return (
    <button
      className={`${
        isLiked ? "bg-green-600" : "bg-red-600"
      } px-2 py-1 rounded-sm text-red-100 hover:bg-red-700 hover:text-red-100 `}
      onClick={handleFavCTA}
      disabled={isLiked}
    >
      {isLiked ? "Liked" : "Add to favorite"}
    </button>
  );
};
