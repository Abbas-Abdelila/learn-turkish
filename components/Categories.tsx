"use client";
import { useState } from "react";
import Link from "next/link";

const Categories = ({ selectedLevel }: { selectedLevel: string }) => {
  const [selected, setSelected] = useState(selectedLevel.toLowerCase());

  const handleSelect = (level: string) => {
    setSelected(level);
  };

  const levels = ["All", "A1", "A2", "B1", "B2", "C1", "C2"];

  return (
    // <div className="flex space-x-3 py-2 px-5 border border-gray-200 rounded-3xl text-lg">
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer border-2 border-red-400 rounded-lg">All</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer border border-gray-100 rounded-lg">A1</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer  rounded-lg border border-gray-100 ">A2</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer  rounded-lg border border-gray-100 ">B1</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer  rounded-lg border border-gray-100 ">B2</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer  rounded-lg border border-gray-100 ">C1</p>
    //     <p className="px-2 md:px-4 mx-4 py-[2px] cursor-pointer  rounded-lg border border-gray-100 ">C2</p>
    // </div>
    <div className="flex xs:max-w-sm max-w-none xs:overflow-x-scroll px-1 py-2 text-sm md:space-x-3 md:py-2 md:px-5 border border-gray-200 rounded-3xl md:text-lg">
      {levels.map((level) => {
        return (
          <Link key={level} href={`/posts/${level.toLowerCase()}`}>
          <p
            key={level}
            onClick={() => handleSelect(level)}
            className={`px-2 md:px-4 mx-4 py-[2px] cursor-pointer ${
              selected === level.toLowerCase()
                ? "border-2 border-red-400 rounded-lg"
                : "border border-gray-100 rounded-lg"
            }`}
          >
            {level}
          </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
