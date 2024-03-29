import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import {Post} from "../lib/types";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Post) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={340}
          width={620}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight dark:text-white">
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg dark:text-gray-400">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 dark:text-gray-400">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
