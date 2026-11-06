import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    title: string,
    src: string,
    slug?: string,
    height: number,
    width: number
}

export default function CoverImage({ title, src, slug, height, width }: Props) {
  const cname = cn('shadow-xs', {
      'hover:shadow-md transition-shadow duration-200': true,
  });
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cname}
      width={width}
      height={height}
      sizes="(max-width: 672px) 100vw, 672px"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
