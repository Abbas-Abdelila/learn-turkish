import Link from "next/link";
import { JSX, SVGProps } from "react";
import { allPosts } from "@/.contentlayer/generated";

export default function BlogNavigation({
  currentPostIndex,
}: {
  currentPostIndex: number;
}) {
  let previousPost = null,
    nextPost = null;

  if (currentPostIndex - 1 >= 0) {
    previousPost = allPosts[currentPostIndex - 1];
  }

  if (currentPostIndex + 1 < allPosts.length) {
    nextPost = allPosts[currentPostIndex + 1];
  }

  return (
    <div className="flex justify-between gap-4 md:gap-8 items-center py-6 lg:py-16">
      <div className="flex flex-col">
        <Link
          className={`group inline-flex align-center ${
            !previousPost ? "disabled opacity-40" : ""
          } `}
          href={
            previousPost?.url
              ? `/posts/${previousPost.level.toLowerCase()}/${previousPost.url}`
              : "#"
          }
          passHref
        >
          <div className="flex items-center">
            <span>
              <IconArrowleft className="h-6 w-6 mr-2" />
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
              Previous Post
            </p>
          </div>
        </Link>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-200">
          {previousPost?.title}
        </h2>
      </div>
      <div className="flex flex-col">
        <Link
          className={`group inline-flex align-center ${
            !nextPost ? "disabled opacity-40" : ""
          } `}
          href={nextPost?.url
            ? `/posts/${nextPost.level.toLowerCase()}/${nextPost.url}`
            : "#"}
        >
          <div className="flex items-center justify-end w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-right font-semibold text-zinc-600 dark:text-zinc-400">
              Next Post
            </p>
            <span>
              <IconArrowright className="h-6 w-6 ml-2" />
            </span>
          </div>
        </Link>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-200">
          {nextPost?.title}
        </h2>
      </div>
    </div>
  );
}

function IconArrowleft(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function IconArrowright(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
