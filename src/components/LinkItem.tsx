// TODO use storyblok-generate-ts (https://www.npmjs.com/package/storyblok-generate-ts)
export type Props = {
  blok: {
    displayText: string
    url: {
      url: string
      target: string
      linktype: string
      fieldtype: string
      cached_url: string
    }
  }
}

export const LinkItem = ({ blok: { displayText, url }}: Props) => {
  if (url.linktype !== 'url') return null
  return (<a href={url.url} target={url.target}>{displayText}</a>)
}