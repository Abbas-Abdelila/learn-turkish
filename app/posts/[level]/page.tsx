import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Categories from "@/components/Categories";
import Chat from "@/components/Chat";
import EmailComponent from "@/components/EmailComponent";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
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

export async function generateMetadata({
  params,
}: {
  params: { level: string };
}) {
  return {
    title: `${params.level.toUpperCase()} | Pick Turkish`,
    desc: `${params.level.toUpperCase()} Level Articles}`
  };
}

const Levels = async ({ params }: { params: { level: string } }) => {
  const session = await getServerSession(authOptions)
  let readArticles : ReadArticle[] = [];
  let isRead = false;
  if (session) {
    const response = await fetch(`${process.env.URL}/api/reading-status/count?user_id=${session.user.userId}&levels=${params.level.toUpperCase()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    readArticles  = data;
  }
  
  const posts: Post[] = allPosts
    .filter((post) => post.level.toLowerCase() == params.level.toLowerCase())
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="flex flex-col space-y-4 w-[95%] mx-auto mt-16">
      <div className="flex my-10 justify-start">
        <Categories selectedLevel={params.level.toLowerCase()} />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-[60%]">
          {posts.length != 0 ? posts.map((post) => {
            if (readArticles){
              isRead = readArticles.some(article => article.article_id === post.url);
            }
            return (
              <div key={post._id} className="flex flex-col mb-5">
                <div className="flex space-x-2 items-center">
                <Link href={`${params.level}/${post.url}`}>
                  <h3 className="text-xl text-slate-800 dark:text-white font-medium hover:text-blue-700 hover:underline underline-[1px] decoration-red-200 underline-offset-[6px] cursor-pointer">
                    {post.title} 
                  </h3>
                </Link>
                  { isRead && <span><CheckedIcon /></span>}
                </div>
                
                <time className="text-sm text-slate-700 dark:text-[#8f8f8f]">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
            );
          }) : <EmailComponent />}
        </div>
        <div className="hidden md:block md:w-[40%]">
          {session && 
          <div className="sticky top-0">
            <Chat />
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Levels;
