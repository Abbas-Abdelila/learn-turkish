import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-hero rounded-xl  md:rounded-2xl lg:rounded-3xl my-10 p-5 lg:p-8">
      <div>
        <h2 className="bg-gradient-to-r p-3 from-gray-600 via-gray-800 to-red-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-normal dark:text-[#f5f5f5]">
          Your One-Stop Turkish Learning Place.
        </h2>
      </div>
      <div className="relative w-24 h-24 sm:h-32 sm:w-48 md:h-48 md:w-64 lg:h-48 lg:w-60 ">
        <Image
          fill
          sizes="512px"
          className="rounded-xl md:rounded-2xl lg:rounded-3xl object-contain"
          src="/logo.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
