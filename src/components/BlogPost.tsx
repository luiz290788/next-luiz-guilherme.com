import { StoryblokComponent, renderRichText } from "@storyblok/react/rsc"

function References({ references }: { references: any[] }) {
  return <section>
    References
    <ul>
      {references.map((reference) => <li key={reference._uid}><StoryblokComponent blok={reference} /></li>)}
    </ul>
  </section>
}

export type Props = {
  // TODO use storyblok-generate-ts (https://www.npmjs.com/package/storyblok-generate-ts)
  blok: {
    title: string
    content: any
    component: 'blogPost'
    references: any[]
  }
}

export const BlogPost = ({ blok: { title, content, references }}: Props) => {
  return (<article>
    <h1>{title}</h1>
    <section dangerouslySetInnerHTML={{ __html: renderRichText(content) }} />
    
    {references ? <References references={references} /> : null}
  </article>)

  
}