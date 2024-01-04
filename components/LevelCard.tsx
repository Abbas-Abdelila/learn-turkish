import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  image: string;
}

const LevelCard = ({ title, desc, image }: Props) => {
  return (
    <div className="flex items-start mx-auto my-10 space-x-4 hover:scale-105 transition transform duration-200 ease-out hover:bg-gray-100 hover:dark:bg-[#262626] hover:rounded-lg p-1 cursor-pointer">
      {/* left */}
      <div className="relative w-12 h-12 sm:h-16 sm:w-24 md:h-24 md:w-32 lg:h-32 lg:w-48">
        <Image
          src={`/images/${image}`}
          alt="Level Image"
          fill
          sizes="512px"
          className="rounded-lg object-contain"
        />
      </div>

      {/* right */}
      <div className="flex flex-col">
        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white cursor-pointer">
          {title}
        </h1>
        <p className="font-normal text-gray-800 dark:text-white text-md line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

export default LevelCard;
