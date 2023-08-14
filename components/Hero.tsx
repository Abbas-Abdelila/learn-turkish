import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-hero rounded-xl  md:rounded-2xl lg:rounded-3xl my-10 p-5 lg:p-8">
      <div>
        <h1 className="bg-gradient-to-r p-3 from-gray-600 via-gray-800 to-red-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl md:text-3xl lg:text-5xl leading-normal">
          Your One-Stop Turkish Learning Place.
        </h1>
      </div>
      <div className="relative h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]  md:h-[300px] md:w-[300px] lg:w-[380px] lg:h-[380px]">
        <Image
          fill
          className="rounded-xl md:rounded-2xl lg:rounded-3xl"
          src="/logo.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
