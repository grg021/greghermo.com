/*
 * Greg's work history, shared by the homepage (one line per role) and About (full entries).
 * Outcome figures from the old site are unconfirmed (see PRODUCT.md) and stay out.
 */

export type WorkItem = {
  year: string
  name: string
  keepCase?: boolean
  role: string
  period: string
  body: string
  stack: string
  link: { href: string; label: string } | null
}

export const STACK_NOTE =
  'Most days that means the Laravel ecosystem (Laravel, Livewire, Inertia, Pest), with React, Next.js and React Native when the job calls for them.'

export const WORK: WorkItem[] = [
  {
    year: '2025',
    name: 'Bo’s Coffee Calamba',
    role: 'Co-founder, DGH Food Inc.',
    period: '2025 – present',
    body: 'My wife and I brought Bo’s Coffee to Calamba to make a place for community, connection and great homegrown coffee. It’s a full store with a drive-thru, and more than a business, it’s a way to serve.',
    stack: 'Stewardship · Community',
    link: { href: 'https://www.boscoffeecalamba.com/', label: 'boscoffeecalamba.com' },
  },
  {
    year: '2021',
    name: 'ContactOut',
    role: 'Senior Software Engineer',
    period: '2021 – present',
    body: 'Recruitment intelligence: tools for talent analytics and faster sourcing, built on Laravel and PHP with React.js and Tailwind CSS on the front end.',
    stack: 'Laravel · PHP · React · Tailwind CSS',
    link: { href: 'https://contactout.com', label: 'contactout.com' },
  },
  {
    year: '2016',
    name: 'Custom Software by Preston',
    role: 'Senior PHP Developer (Laravel)',
    period: '2016 – 2021',
    body: 'Designed and built web information systems and RESTful APIs for clients in Chicago and Durham, NC, and ran the AWS servers behind them for web and database hosting.',
    stack: 'PHP · Laravel · Vue.js · Angular · AWS',
    link: null,
  },
  {
    year: '2015',
    name: 'Vinteo',
    role: 'Co-founder & CEO, Lead Developer',
    period: '2015 – 2016',
    body: 'Automated video analysis that collected consumer-behaviour data for stores, with real-time store monitoring dashboards. Vinteo won IdeaSpace PH 2015.',
    stack: 'Video analysis · Dashboards · Startup',
    link: {
      href: 'https://www.techinasia.com/ideaspace-2015-startup-competition-winners',
      label: 'IdeaSpace 2015 winners',
    },
  },
  {
    year: '2011',
    name: 'eHealth with Ateneo IPC',
    keepCase: true,
    role: 'Lead Developer and Software Architect',
    period: '2011 – present',
    body: 'Health information systems with Dr. Dennis Batangan at the Ateneo Institute of Philippine Culture, from the eHealth.ph national portal to EMRs, registries and reporting tools for primary care, chronic disease, mental health and traditional medicine.',
    stack: 'PHP · MySQL · EMR · Health data interoperability',
    link: { href: '/ehealth', label: 'Six projects' },
  },
  {
    year: '2011',
    name: 'Solutions Resource',
    role: 'Lead Developer, then Co-founder & CTO',
    period: '2011 – 2015',
    body: 'Led the technology and technical team on web, mobile and custom software projects, then joined the board as CTO for planning and technical management. I also taught Red Hat JBoss courses for partner IT Group Inc.',
    stack: 'PHP · Java EE · Liferay · Joomla · WordPress',
    link: null,
  },
  {
    year: '2008',
    name: 'ASTI',
    role: 'Science Research Specialist',
    period: '2008 – 2010',
    body: 'My first job, at the Advanced Science and Technology Institute: building and maintaining the ASTI Information System and other information systems.',
    stack: 'PHP · jQuery · MySQL · CentOS',
    link: null,
  },
]
