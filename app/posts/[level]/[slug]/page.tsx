// @ts-nocheck
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Chat from "@/components/Chat";
import BlogNavigation from "@/components/BlogNavigation";
import Author from "@/components/Author";
import Link from "next/link";
import { ImageGrid } from "@/components/component/image-grid";
import MarkComplete from "./MarkComplete";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const currentPost = allPosts.find(
    (post) => post.url.split("/").slice(-1)[0] == params.slug
  );
  return {
    title: currentPost?.title,
    desc: currentPost?.desc,
  };
}

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    level: post.level.toLowerCase(),
    slug: post.url.split("/").slice(-1)[0],
  }));
}

function RoundedImage(props) {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative w-64 h-64 sm:h-96 sm:w-96 lg:h-[512px] lg:w-[512px]">
        <Image alt={props.alt} className="rounded-2xl" {...props} />
      </div>
    </div>
  );
}

function CustomLink(props) {
  return (
    <Link href={props.url} target="_blank">
      {props.name}
    </Link>
  );
}

const ComponentMap = { Image: RoundedImage, CustomLink, ImageGrid };

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const currentPost = allPosts.find(
    // @ts-ignore
    (post) => post.url.split("/").slice(-1)[0] == params.slug
  );
  const currentPostIndex = allPosts.findIndex(
    // @ts-ignore
    (post) => post.url.split("/").slice(-1)[0] == params.slug
  );

  if (!currentPost) {
    return (
      <div className="flex h-screen justify-center items-start text-3xl text-red-600">
        Post not found
      </div>
    );
  }
  const Component = getMDXComponent(currentPost.body.code);

  const session = await getServerSession(authOptions);
  let status = false;
    
  if (session) {
  const user_id = session?.user.userId;
  const article_id = currentPost.url;
  const response = await fetch(`${process.env.URL}/api/reading-status?user_id=${user_id}&article_id=${article_id}`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  })

  const data = await response.json();
  if (data) {
    status = data.status;
  }
  }

  return (
    <div className="flex w-[95%] mx-auto max-w-[1800px] mt-20">
      <div className="flex justify-center p-5 md:w-[60%]">
        <article className="prose dark:prose-invert prose-slate prose-xs max-w-sm sm:max-w-md sm:prose-sm md:prose-xl  md:max-w-3xl prose-hr:border-red-200 prose-strong:text-red-500 dark:text-white prose-a:text-red-500 prose-a:underline prose-a:underline-offset-[6px]">
          <Component components={{ ...ComponentMap }} />
          <p className="text-xl md:text-2xl text-gray-800 dark:text-white font-semibold">
            Written by
          </p>
          <Author />
          {session && <div className="flex justify-end my-4">
            <MarkComplete user_id={session.user.userId} article_id={currentPost.url} status={status} level={currentPost.level}/>
          </div>}
          <BlogNavigation currentPostIndex={currentPostIndex} />
        </article>
      </div>
      <div className="hidden md:block md:w-[40%]">
        <div className="sticky top-0">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
