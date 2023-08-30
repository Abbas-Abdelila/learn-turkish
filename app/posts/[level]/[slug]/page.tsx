// @ts-nocheck
// import Link from "next/link";
import Image from "next/image";
// import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: allPosts.find(
      (post) => post.url.split("/").slice(-1)[0] == params.slug
    ).title,
  };
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

const ComponentMap = { Image: RoundedImage };

const PostPage = ({ params }: { params: { slug: string } }) => {
  const currentPost = allPosts.find(
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
  return (
    <div className="flex justify-center px-6 py-5">
      <article className="prose prose-slate prose-xl max-w-3xl prose-hr:border-red-200 prose-strong:text-red-500 ">
        <Component components={{ ...ComponentMap }} />
      </article>
    </div>
  );
};

export default PostPage;
