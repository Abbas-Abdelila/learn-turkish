import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const Author = () => {
  return (
    <div className="flex items-center justify-between h-16 md:h-24 px-2 py-1  rounded-xl border border-gray-300 bg-[#f1f5f8]">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/abbas.jpg"
          alt="author-profile"
          height={64}
          width={64}
          className="rounded-full h-10 w-10 md:h-16 md:w-16"
        />
        <p className="font-semibold text-md md:text-lg text-gray-900">Abbas Abdelila</p>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <Link href="https://twitter.com/abbasabdelila" target="_blank">
          <Icons.twitter />
        </Link>
        <Link href="https://twitter.com/abbasabdelila" target="_blank" className="no-underline hidden md:flex hover:font-semibold transition-transform duration-150 ease-in-out">
          <p>@abbasabdelila</p>
        </Link>
      </div>
    </div>
  );
};

export default Author;
