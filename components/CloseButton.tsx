/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BLPtHj4Anfk
 */
import { Button } from "@/components/ui/button"

export default function Close() {
  return (
    <div className="mt-4 mb-8">
      <Button className="dark:bg-[#121212] hover:!bg-white transition-transform duration-150" aria-label="Close chatbot" variant="outline" >
        <svg
          className=" h-6 w-6 dark:text-red-500"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>
    </div>
  )
}

