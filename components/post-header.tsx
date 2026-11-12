import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import PageBand from './page-band'

type Props = { title: string; coverImage?: string; date: string }

export default function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PageBand title={title}>
        <time dateTime={date} className="meta tabular text-muted">
          {format(parseISO(date), 'MMMM d, yyyy')}
        </time>
      </PageBand>
      {coverImage && (
        <div className="wrap">
          <div className="w-full bg-sheet rounded-t-[20px] px-5 pt-10 sm:px-10 md:pt-16 lg:px-16">
            <div className="relative mx-auto aspect-[620/340] max-w-3xl">
              <Image src={coverImage} alt="" fill sizes="(min-width: 768px) 48rem, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
