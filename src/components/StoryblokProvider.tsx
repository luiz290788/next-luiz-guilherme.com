"use client";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { BlogPost } from "./BlogPost";
import { LinkItem } from "./LinkItem";

storyblokInit({
  accessToken: process.env.STORYBLOK_KEY,
  use: [apiPlugin],
  components: {
    blogPost: BlogPost,
    linkItem: LinkItem,
  }
});

/**
 * @see https://github.com/storyblok/storyblok-react#nextjs-using-app-router---live-editing-support
 */
export default function StoryblokProvider({ children }: { children: React.ReactElement }) {
  return children;
}