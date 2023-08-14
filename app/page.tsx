import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Levels from "@/components/Levels";
import Post from "@/components/Post";
import PostList from "@/components/PostList";
import { Metadata } from "next";
// import { Noto_Sans_Cypriot } from "next/font/google";

export const metadata: Metadata = {
  title: "Pick Turkish",
  description: "Learn Turkish with Pick Turkish",
};

// const Noto = Noto_Sans_Cypriot({
//   subsets: ["cypriot"],
//   weight: "400",
//   style: "normal",
// });

export default function Home() {
  return (
    <main className="flex flex-col w-[95%] mx-auto">
      <Hero />
      <section>
        <Levels />
        <h1 className="text-3xl font-semibold text-center text-gray-800 my-10">
          Latest Posts{" "}
        </h1>
        <PostList />
      </section>
    </main>
  );
}
