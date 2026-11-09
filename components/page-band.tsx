import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  children?: ReactNode
}

/* A strip of court for inner pages: baseline frame, one singles line, title in a lettering box. */
export default function PageBand({ title, children }: Props) {
  return (
    <div className="px-4 sm:px-8">
      <div className="relative mx-auto max-w-court border-[6px] border-line bg-court">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-[18%] h-1 origin-left animate-paint-x bg-line" />
        <div aria-hidden="true" className="absolute bottom-0 left-[23.1%] top-0 hidden w-1 origin-top animate-paint-y bg-line [animation-delay:120ms] md:block" />
        <div className="relative px-5 pb-[14%] pt-12 sm:px-10 md:pb-24 md:pt-16 lg:px-16">
          <h1 className="lettering block w-fit max-w-full bg-court py-2 pr-3 text-[clamp(2.5rem,8vw,6.5rem)]">
            {title}
          </h1>
          {children && <div className="relative mt-6 max-w-[40ch] bg-court py-1 pr-3">{children}</div>}
        </div>
      </div>
    </div>
  )
}
