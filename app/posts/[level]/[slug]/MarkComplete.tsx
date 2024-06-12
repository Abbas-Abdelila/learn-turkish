"use client";

import { Icons } from "@/components/icons";
import { JSX, SVGProps, useState } from "react";

export default function MarkComplete({
  user_id,
  article_id,
  level,
  status
}: {
  user_id: string;
  article_id: string;
  level: string;
  status : boolean
}) {
  const [isComplete, setIsComplete] = useState(status);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/reading-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: Number(user_id),
          article_id,
          level,
          status: !isComplete,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update reading status");
      }

      setIsComplete(!isComplete);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm md:text-md lg:text-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:focus-visible:ring-gray-300 ${
        isComplete
          ? `bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500 ${
              isLoading ? "opacity-40" : "cursor-pointer"
            }`
          : "bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      }`}
    >
      {/* Conditionally render content based on state */}
      {isLoading && (
        // Loading Spinner
        <div className="flex items-center justify-center space-x-2">
          <Icons.spinner className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </div>
      )}
      {!isLoading && error && (
        // Error Message Try Again
        <div className="flex items-center space-x-2 text-red-500">
          <Icons.react className="h-5 w-5" />
          <span>Try again</span>
        </div>
      )}
      {!isLoading && !error && isComplete && (
        // Done Completed
        <div className="inline-flex space-x-2 justify-center items-center">
          <CheckIcon className="h-5 w-5" />
          <span>Done</span>
        </div>
      )}
      {!isLoading && !isComplete && !error && "Mark as Complete"}
    </button>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
