type Params = {
  slug: string
}

export default function BlogPost({ params }: { params: Params }) {
  return (
    <div>
      This is the post for the slug {params.slug}
    </div>
  )
}

export async function generateStaticParams() {
  return [
    {slug: 'post-one'},
    {slug: 'post-two'},
    {slug: 'post-three'},
  ]
}