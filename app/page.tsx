import EmailComponent from "@/components/EmailComponent";
import Hero from "@/components/Hero";
import Levels from "@/components/Levels";
import PostList from "@/components/PostList";
import { Metadata } from "next";
// import { Noto_Sans_Cypriot } from "next/font/google";

export const metadata: Metadata = {
  title: "Pick Turkish | Learn Turkish Online",
  description:
    "Pick Turkish is a platform where you can learn Turkish online. We offer free Turkish lessons, vocabulary, grammar, and more.",};

// const Noto = Noto_Sans_Cypriot({
//   subsets: ["cypriot"],
//   weight: "400",
//   style: "normal",
// });

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-[1800px] mt-16">
      <Hero />
      <section className="w-[95%] mx-auto">
        <Levels />
        <h2 className="text-3xl font-semibold text-center text-gray-800 my-10 dark:text-white">
          Latest Posts{" "}
        </h2>
        <PostList />
      </section>
      <EmailComponent />
    </main>
  );
}
