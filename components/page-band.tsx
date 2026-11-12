import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  children?: ReactNode
}

/* The head of an inner page: the title on the left line under the fixed nav, one line under it. */
export default function PageBand({ title, children }: Props) {
  return (
    <div className="wrap page-top pb-12 md:pb-16">
      <h1 className="display max-w-[18ch] text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">{title}</h1>
      {children && <div className="mt-6 max-w-[48ch] text-[1.25rem] leading-normal text-ink">{children}</div>}
    </div>
  )
}
