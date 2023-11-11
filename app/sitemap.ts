import { MetadataRoute } from 'next'
import { allPosts } from "contentlayer/generated";

const postUrls = allPosts.map((post) => ({
  url: `https://www.pickturkish.com/posts/a1/${post.url.split("/").slice(-1)[0]}`,
  lastModified: new Date(post.date),
  changeFrequency: 'weekly' as const,
  priority: 0.7,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pickturkish.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.pickturkish.com/posts/all',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.pickturkish.com/posts/a1',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...postUrls,
    ]
}