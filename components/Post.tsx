import Image from "next/image";
import Link from "next/link";

type PostProps = {
  title: string;
  image: string;
  desc: string;
  url: string;
  level: string;
}

const PostComponent = ({ title, image, desc, url, level }: PostProps) => {
  return (
    <div className="flex w-[80%] mx-auto my-10 space-x-4 border-b py-5">
      {/* left */}
      <div className="relative w-12 h-12 sm:h-16 sm:w-24 md:h-24 md:w-32 lg:h-24 lg:w-30 hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer">
        <Image
          src={`/images/${image}`}
          alt="Level Image"
          fill
          className="rounded-lg"
        />
      </div>

      {/* right */}
      <div className="flex flex-col w-full">
        <Link href={`/posts/${level.toLowerCase()}/${url}`}>
        <h1 className="font-semibold text-xl text-gray-900 cursor-pointer">
          {title}
        </h1>
        </Link>
        <p className="font-normal text-gray-600 text-md line-clamp-2">
          {desc}
        </p>
        <h3 className="text-right flex-1">A1</h3>
      </div>
    </div>
  );
};

export default PostComponent;
