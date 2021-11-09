import Image from 'next/image'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-14 md:mb-12">

      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex items-center">
          <div className="mr-8 relative w-40 h-40">
          <Image src='/assets/img/greghermo_profilepic.JPG' 
            quality="100"
            objectFit="cover"
            className="rounded-full grayscale filter hover:grayscale-0"
            layout="fill" />
          </div>
        </div>
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Greg Hermo</h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">Sr Softwar Engineer at <span className="font-semibold">ContactOut</span></h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Helping developers build a cleaner and faster web. Let's craft software using Laravel PHP, React and TailwindCSS.</p>
        </div>
      </div>
    </section>
  )
}
