/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ucjQG2eo1Gq
 */
import { Button } from "@/components/ui/button"

export default function Ask() {
  return (
    <section className="fixed bottom-0 right-0 p-4">
      <Button className="flex items-center space-x-2 bg-red-500 shadow-lg rounded-full py-2 px-4" variant="outline">
        <svg
          className=" w-6 h-6 text-white"
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
          <path d="M17 6.1H3" />
          <path d="M21 12.1H3" />
          <path d="M15.1 18H3" />
        </svg>
        <span className="text-white">Ask AI <span className="text-white font-medium">Delight</span></span>
      </Button>
    </section>
  )
}
