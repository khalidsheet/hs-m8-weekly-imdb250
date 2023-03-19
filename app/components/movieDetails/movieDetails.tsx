import Image from "next/image";
import { MovieHoverDetails } from "./movieHoverDetails";

export const MovieDetails = ({ movie, isLiked }: any) => {
  return (
    <div className="min-h-[400px] rounded-lg mt-4 relative movie">
      <div className="poster rounded-lg min-h-[440px]">
        <Image
          className="rounded-lg min-h-[440px]"
          src={movie.image_url}
          alt={movie.name}
          width={400}
          height={100}
        />
      </div>
      <div className="mt-3">{movie.name}</div>
      <div className="details absolute bottom-8 w-full h-16 bg-gradient-to-b  from-[#00000010] to-black p-2 hidden">
        <MovieHoverDetails movie={movie} />
      </div>
    </div>
  );
};
