import { HeartIcon } from "@/app/assets/icons/Heart";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex w-full bg-[#000000] fixed z-10 h-16 items-center justify-between px-4 drop-shadow-lg">
      <Link href={"/"} className="font-bold text-red-500 text-2xl">
        NETFLIX
      </Link>
      <Link href={"/likes"} className="flex gap-x-2">
        <HeartIcon /> Favorites
      </Link>
    </div>
  );
};
