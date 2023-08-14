import { allPosts, Post } from "contentlayer/generated";
import PostComponent from "./Post";



const posts = allPosts;

const PostList = () => {
 return (
  <div className="">
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