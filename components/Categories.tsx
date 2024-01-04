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


    <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 py-2">
      {levels.map((level) => {
        return (
          <Link key={level} href={`/posts/${level.toLowerCase()}`}>
          <button
            key={level}
            onClick={() => handleSelect(level)}
            className={`px-3 py-1 bg-gray-50 text-gray-700 ${
              selected === level.toLowerCase()
                ? "border-2 border-red-400 rounded-md dark:border-4 dark:border-red-500 dark:shadow-2xl"
                : "border border-gray-200 rounded-md"
            }`}
          >
            {level}
          </button>
          </Link>
        );
      })}
    </div>

  );
};

export default Categories;


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P0an1nSpL8s
 */
// export default function Categories() {
//   return (
//     <>
//       <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 py-2">
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           A1
//         </button>
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           A2
//         </button>
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           B1
//         </button>
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           B2
//         </button>
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           C1
//         </button>
//         <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-300">
//           C2
//         </button>
//       </div>
      
//     </>
//   )
// }

