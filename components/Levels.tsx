import LevelCard from "./LevelCard";
import Link from "next/link";

const Levels = () => {
  return (
    <div className="bg-slate-50 sm:mx-auto p-4 rounded-3xl">
      <h1 className="text-center text-3xl md:text-4xl text-gray-800 my-16 font-bold">
        Explainer Articles
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-12 justify-start mx-auto md:justify-center ">
        <Link href="/posts/a1">
        <LevelCard
          title="A1"
          desc="Meet, greet, and talk about your family and friends"
          image="A1.png"
        />
        </Link>

        <Link href="/posts/a2">
        <LevelCard
          title="A2"
          desc="Deep dive into Turkish Grammar and learn suffixes."
          image="A2.png"
        />
        </Link>

        <Link href="/posts/b1">
        <LevelCard
          title="B1"
          desc="Deep dive into Turkish Grammar and learn suffixes."
          image="B1.png"
        />
        </Link>

        <Link href="/posts/b2">
        <LevelCard
          title="B2"
          desc="See all your learnings in action and learn some idioms"
          image="B2.png"
        />
        </Link>

        <Link href="/posts/c1">
        <LevelCard
          title="C1"
          desc="Read timeless principles by great authors in Turkish"
          image="C1.png"
        />
        </Link>

        <Link href="/posts/c2">
        <LevelCard
          title="C2"
          desc="You are now good to go and read books in Turkish"
          image="C2.png"
        />
        </Link>
        
      </div>
      </div>
  );
};

export default Levels;
