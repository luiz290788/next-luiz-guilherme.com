import { ISbStories, ISbStory, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

function fetchBlogPost(slug: string): Promise<ISbStory> {
  return getStoryblokApi().get(`cdn/stories/blog-posts/${slug}`, {
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

export async function generateStaticParams() {
  const result: ISbStories = await getStoryblokApi().get(`cdn/stories`, {
    starts_with: 'blog-posts/',
    per_page: 100,
    sort_by: 'first_published_at:asc',
    excluding_fields: 'title,content',
  });

  return result.data.stories.map((story) => ({ slug: story.slug }))
}