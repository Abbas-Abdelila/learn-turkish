import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Categories from "@/components/Categories";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All | Pick Turkish',
  description: 'All posts of the blog of the website of Pick Turkish',
}



const Posts = () => {
  const posts: Post[] = allPosts;
  return (
    <div className="flex flex-col space-y-4 w-[95%] mx-auto">
    <div className="flex my-10 justify-start">
      <Categories selectedLevel="All" />
    </div>
    <div className="flex space-x-10">
      <div className="max-w-[60%]">
      {posts.map((post) => {
        return (
          <div key={post._id} className="flex flex-col mb-5 ">
            <Link href={`${post.level.toLowerCase()}/${post.url}`}>
            <h1 className="text-xl text-slate-800 font-medium hover:text-blue-700 hover:underline underline-[1px] decoration-red-200 underline-offset-[6px] cursor-pointer">{post.title}</h1>
            </Link>
            <time className="text-sm text-slate-700" >{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
          </div>
        )
      })}
      </div>
      <div>

      </div>
    </div>
      

    </div>

  );
};

export default Posts;
