import { JSX, SVGProps } from "react"


export default function CheckedIcon() {
    return (
      <div className="flex items-center">
        <div className="bg-green-500 rounded-full p-1">
          <CheckIcon className="w-3 h-3 md:w-[14px] md:h-[14px] text-white" />
        </div>
      </div>
    )
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
    )
  }