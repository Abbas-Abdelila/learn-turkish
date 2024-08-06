import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
// import { getMDXComponent } from "next-contentlayer/hooks";
import Categories from "@/components/Categories";
import type { Metadata } from "next";
import Chat from "@/components/Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import CheckedIcon from "@/components/CheckedIcon";

type ReadArticle = {
  id: number;
  user_id: number;
  article_id: string;
  status: boolean;
  level?: string; // Optional since not every article seems to have a level in the example provided
  last_accessed: string;
  created_at: string;
  updated_at: string;
};

export const metadata: Metadata = {
  title: "Pick Turkish | Learn Turkish Online | All Posts",
  description: "All posts of the blog of the website of Pick Turkish",
};

const Posts = async () => {
  const session = await getServerSession(authOptions);
  let readArticles: ReadArticle[] = [];
  let isRead = false;
  if (session) {
    const response = await fetch(
      `${process.env.URL}/api/reading-status/count?user_id=${session.user.userId}&levels=A1-A2-B1-B2-C1-C2`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    readArticles = data;
  }

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
            if (readArticles != null && readArticles.length > 0) {
              isRead = readArticles.some(
                (article) => article.article_id == post.url
              );
            }
            return (
              <div key={post._id} className="flex flex-col mb-5 ">
                <div className="flex space-x-2 items-center">
                  <Link href={`${post.level.toLowerCase()}/${post.url}`}>
                    <h1 className="text-xl text-slate-800 dark:text-white font-medium hover:text-blue-700 hover:underline underline-[1px] decoration-red-200 underline-offset-[6px] cursor-pointer">
                      {post.title}
                    </h1>
                  </Link>
                  {isRead && (
                    <span>
                      <CheckedIcon />
                    </span>
                  )}
                </div>
                <time className="text-sm text-slate-700 dark:text-[#8f8f8f]">
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
