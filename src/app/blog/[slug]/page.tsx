import { ISbStory, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

function fetchBlogPost(slug: string): Promise<ISbStory> {
  return getStoryblokApi().get(`cdn/stories/blog-posts/${slug}`, {
    version: 'draft',
    resolve_relations: ['references']
  });
}

type Params = {
  slug: string
}

export default async function BlogPost({ params }: { params: Params }) {
  const result = await fetchBlogPost(params.slug)

  return (<StoryblokStory story={result.data.story} />)
}