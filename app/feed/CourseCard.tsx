
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function CourseCard({title, progress, image_url} : {title: string, progress: number, image_url: string}) {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-[#1f1f1d] shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1)] rounded-lg overflow-hidden">
      <Link href={`/posts/${title.toLocaleLowerCase()}`}>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="mb-4">
          <Progress className= "dark:bg-black" value={progress} />
          <p className="text-right text-2xl">{progress} %</p>
        </div>
      </div>
      <Image
        alt="Course Image"
        className="w-full h-48 object-cover"
        height={500}
        src={image_url}
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width={600}
      />
      </Link>
    </Card>
  )
}