import { ISbStories } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";

function fetchBlogPosts(): Promise<ISbStories> {
  return getStoryblokApi().get(`cdn/stories`, {
    version: "draft",
    starts_with: 'blog-posts/',
    per_page: 5,
    sort_by: 'first_published_at:desc'
  });
}

const BlogLandingPage = async () => {

  const { data } = await fetchBlogPosts()

  return (
    <div>
      <ul>
        {
          data.stories.map((story) => (
            <li key={story.slug}><a href={`/blog/${story.slug}`}>{story.content.title}</a></li>
          ))
        }
      </ul>
    </div>
  )
}


export default BlogLandingPage