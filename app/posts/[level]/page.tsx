import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Categories from "@/components/Categories";


export async function generateMetadata({
  params,
}: {
  params: { level: string };
}) {
  return {
    title: `${ params.level.toUpperCase()} | Pick Turkish`,
  };
}




const Levels = ({ params } : { params : { level : string}}) => {
  const posts: Post[] = allPosts.filter((post) => post.level.toLowerCase() == params.level.toLowerCase());
  return (
    <div className="flex flex-col space-y-4 w-[95%] mx-auto">
    <div className="flex my-10 justify-start">
      <Categories selectedLevel={params.level.toLowerCase()} />
    </div>
    <div className="flex flex-col md:flex-row md:space-x-10">
      <div className="md:w-[60%]">
      {posts.map((post) => {
        return (
          <div key={post._id} className="flex flex-col mb-5">
            <Link href={`${params.level}/${post.url}`}>
            <h1 className="text-xl text-slate-800 font-medium hover:text-blue-700 hover:underline underline-[1px] decoration-red-200 underline-offset-[6px] cursor-pointer">{post.title}</h1>
            </Link>
            <time className="text-sm text-slate-700" >{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
          </div>
        )
      })}
      </div>
      <div className="md:w-[40%]">
      </div>
    </div>
      

    </div>

  );
};

export default Levels;
