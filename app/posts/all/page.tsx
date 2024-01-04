import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
// import { getMDXComponent } from "next-contentlayer/hooks";
import Categories from "@/components/Categories";
import type { Metadata } from "next";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "All Blogs | Pick Turkish",
  description: "All posts of the blog of the website of Pick Turkish",
};

const Posts = () => {
  const posts: Post[] = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="flex flex-col space-y-4 w-[95%] mx-auto max-w-[1800px] mt-16">
      <div className="flex my-10 justify-start">
        <Categories selectedLevel="All" />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-[60%]">
          {posts.map((post) => {
            return (
              <div key={post._id} className="flex flex-col mb-5 ">
                <Link href={`${post.level.toLowerCase()}/${post.url}`}>
                  <h1 className="text-xl text-slate-800 dark:text-white font-medium hover:text-blue-700 hover:underline underline-[1px] decoration-red-200 underline-offset-[6px] cursor-pointer">
                    {post.title}
                  </h1>
                </Link>
                <time className="text-sm text-slate-700 dark:text-white">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block md:w-[40%]">
          <div className="sticky top-0">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
