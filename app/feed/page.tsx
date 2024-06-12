import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import CourseCard from "./CourseCard";
import { toTitle } from "@/lib/utils";
import { allPosts } from "@/.contentlayer/generated";

interface ProgressLevels {
  [key: string] : number
}

const Feed = async () => {
  const session = await getServerSession(authOptions);
  let progressLevels :  ProgressLevels = {};
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  if (session) {
    const readArticles = await fetch(`${process.env.URL}/api/reading-status/count?user_id=${session?.user.userId}&levels=${levels.join("-")}}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    }) 
    const readArticlesData = await readArticles.json();

    levels.forEach(level => {
      const levelPosts = allPosts.filter(post => post.level === level)
      const readCountForLevel = readArticlesData.filter((article: { level: string; }) => article.level === level).length;
      const totalCountForLevel = levelPosts.length;
      if (totalCountForLevel == 0) {
        progressLevels[level] = 0;
        return;
      } 
      else {
      progressLevels[level] = Math.floor((readCountForLevel / totalCountForLevel) * 100);
      }
    })
   
  }
  
  return (
    <div className="flex flex-col justify-center items-center my-20 w-[80%] mx-auto divide-y-2">
     

      <div className="levels-card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
        <div>
          <h3 className="font-semibold text-2xl text-start w-full">
            Hi <span className="text-red-500">{session ? toTitle(session?.user.username) : "there!"}</span>
          </h3>
          <p className="text-lg py-2 font-normal text-slate-700 dark:text-white">Welcome back, continue from where you left off!</p>
        </div>
        {levels.map(level => (
          <CourseCard key={level} title={level} progress={progressLevels[level]} image_url={`/images/${level.toLowerCase()}.jpeg`} />
        ))}
      
        {/* <CourseCard title="A1" progress={progressLevels} image_url="/images/istanbul.jpeg"/>
        <CourseCard title="A2" progress={12} image_url="/images/lavanta.jpeg"/>
        <CourseCard title="B1" progress={44} image_url="/images/gaziantep.jpeg"/>
        <CourseCard title="B2" progress={5} image_url="/images/ephesus.jpeg"/>
        <CourseCard title="C1" progress={2} image_url="/images/cappadocia.jpeg"/>
        <CourseCard title="C2" progress={1} image_url="/images/bodrum.jpeg"/> */}
      </div>
    </div>
  );
};

export default Feed;
