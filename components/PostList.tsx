import { allPosts, Post } from "contentlayer/generated";
import PostComponent from "./Post";
import { compareDesc } from "date-fns";



const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

const PostList = () => {
 return (
  <div className="md:grid grid-cols-2 lg:grid-cols-3 md:gap-x-3 lg:gap-x-4">
    {posts.map((post: Post) => (
      <PostComponent
        url={post.url}
        level={post.level}
        key={post._id}
        title={post.title}
        image={post.image}
        desc={post.desc}
      />
    ))}
  </div>
 )
  
}

export default PostList