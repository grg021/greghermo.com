import Layout from '../components/layout'
import PageBand from '../components/page-band'
import { personSchema } from '../lib/schema'

/*
 * Source: Greg's portfolio "Health Informatics Initiatives with Dr. Dennis B. Batangan" (2026-11-09).
 * Greg's rules for this page: no impact figures (record counts, facility/LGU counts, recovered
 * consultations), and name only Dr. Batangan plus institutions. See PRODUCT.md.
 */

const PROJECTS = [
  {
    year: '2025',
    name: 'eMHPRe UHC',
    fullName: 'Electronic Mental Health Program Registry for Local Government Units',
    role: 'System design and documentation',
    period: '2025 – 2027',
    partners: 'DOST · DOH · National Center for Mental Health · LGUs',
    body: [
      'A registry that lets cities and municipalities track mental health services and keep their local registries in step with the Universal Health Care National Health Data Repository (NHDR).',
      'I worked on the architecture for mental health data collection, referral pathways and facility intake, wrote the user guides and maintenance manuals for LGU health workers and administrators, and kept the registry compatible with existing primary care records and SMILHIS OpenHIE standards. De-identification was built in from day one.',
    ],
    stack: 'Registry design · OpenHIE · Privacy by design',
  },
  {
    year: '2024',
    name: 'TaMaHRRiND',
    fullName: 'Traditional Medicine Health Records and Reports in the National Government Databases',
    role: 'Lead Technical Developer',
    period: 'Jul 2024 – Jan 2026',
    partners: 'PITAHC / DOH · DOST-PCHRD · partner clinics',
    body: [
      'A prototype electronic medical record for traditional, complementary and alternative medicine, starting with acupuncture for low back pain, to support the retrospective studies behind national clinical practice guidelines.',
      'I led development of the web prototype on the eHATID LGU core, took part in the joint architecture design for fitting it into SMILHIS and the NHDR, designed the mapping that extracts, de-identifies and standardises intake forms from partner clinics under the Data Privacy Act (RA 10173), and built the analytics dashboard for facility distribution, demographics, diagnoses, acupuncture points and treatment response.',
    ],
    stack: 'Web EMR · Data pipelines · De-identification · Dashboards',
  },
  {
    year: '2023',
    name: 'eTSI NOVuS',
    fullName: 'eTriage for Social Inclusion: Navigating Out of Vulnerability Situations',
    role: 'Feature engineering and analytics',
    period: 'Feb 2023 – Mar 2025',
    partners: 'UK FCDO · Pasig City Health Office',
    body: [
      'An extension of MuPLoMT and eHATID that finds patients lost to follow-up and reaches vulnerable households through Listahanan 3 and 4Ps NHTS-PR data.',
      'I engineered the lost-to-follow-up masterlists, NHTS-PR filters, follow-up forms and reporting dashboards that Pasig Health Aides used for community outreach. After a formative evaluation across Pasig City health centers in 2024, the system was handed over to Pasig City under an MOU and a Creative Commons licence.',
    ],
    stack: 'Patient tracking · Dashboards · Social registry integration',
  },
  {
    year: '2019',
    name: 'MuPLoMT',
    fullName: 'NCD Multi-Programme Local Mapping Tool',
    role: 'Platform engineering and deployment',
    period: '2019 – 2022',
    partners: 'UK Better Health Programme · Pasig City Health Office · Pasig City MIS · Ateneo DISCS',
    body: [
      'An electronic recording and reporting tool for non-communicable disease programs, based on the WHO-PEN and PhilPEN guidelines, for mapping, tracking and managing NCD care across city and municipal health systems.',
      'I handled updates, database maintenance and new features, deployed and migrated servers on site and remotely for LGU partners such as Pasig City and Iloilo, and kept the live systems running. Hosting has since moved fully to the Pasig City MIS office.',
    ],
    stack: 'PHP · MySQL · Server deployment · LGU support',
  },
  {
    year: '2013',
    name: 'eHATID',
    fullName: 'eHealth Tablet-based Information and Decision Support System (eHATID and eHATID2)',
    role: 'Lead Software Architect, with Solutions Resource',
    period: 'Since 2013',
    partners: 'DOST-PCHRD · DOH · PhilHealth · LGUs',
    body: [
      'A tablet and web EMR with decision support that gives local chief executives and municipal health officers real-time health data and keeps them compliant with PhilHealth and DOH reporting.',
      'I built and maintained the web and mobile app portals (apps.ehealth.ph) for LGU registration, app distribution, schema changes and tech transfer, and supported the integration framework linking primary care EMRs (iClinicSys, CHITS, RxBox, WAH, SHINE) with DOH, PhilHealth and local social protection registries. Its codebase became the foundation for SMILHIS, TaMaHRRiND and MuPLoMT.',
    ],
    stack: 'PHP · MySQL · Tablet and web EMR · Interoperability',
  },
  {
    year: '2011',
    name: 'eHealth.ph',
    fullName: 'Philippine Electronic Health Information Village and Portal',
    role: 'Lead Web Developer and Software Architect',
    period: '2011 – 2013 · relaunched Nov 2012',
    partners: 'DOST-PCHRD · Ateneo IPC',
    body: [
      'The national health information portal and online community, first launched in 1998 and rebuilt with DOST-PCHRD and Ateneo IPC as a “health information village” where health workers, researchers and the public could reach health databases, research resources and forums. The relaunch also championed PCHRD’s Tuklas-Lunas drug discovery program.',
      'I rebuilt the platform on Joomla, NGINX, PHP and MySQL, customised the Kunena forum for restricted discussions, real-time notifications and custom submissions, and handled deployments, fixes and server tuning with DOST-PCHRD’s IT engineers. It relaunched in November 2012, was presented at the 13th DOH National Health Research Forum for Action, and became the base for later projects including eHATID.',
    ],
    stack: 'Joomla · Kunena · NGINX · PHP · MySQL',
  },
]

export default function EHealth() {
  return (
    <Layout
      meta={{
        title: 'eHealth | Greg Hermo',
        description:
          'Health information systems Greg Hermo has built with Dr. Dennis B. Batangan and the Ateneo Institute of Philippine Culture since 2011: eHealth.ph, eHATID, MuPLoMT, eTSI NOVuS, TaMaHRRiND and eMHPRe UHC.',
        path: '/ehealth',
        type: 'profile',
        jsonLd: personSchema,
      }}
    >
      <PageBand title={<span className="normal-case">eHealth</span>}>
        <p className="font-serif text-[clamp(1.25rem,2.6vw,1.75rem)] italic leading-snug">
          Health information systems for the Philippines, since 2011.
        </p>
      </PageBand>

      <div className="px-4 sm:px-8">
        <div className="mx-auto max-w-court bg-line px-5 pb-16 pt-12 text-ink sm:px-10 md:pb-24 md:pt-16 lg:px-16">
          <p className="max-w-measure text-lg leading-relaxed text-ink-soft lg:ml-[12rem] lg:pl-10">
            Since 2011 I’ve worked with Dr. Dennis B. Batangan, project leader and research scientist at the Institute
            of Philippine Culture (IPC), Ateneo de Manila University, on health information systems for local
            governments: electronic medical records, disease and program registries, and the reporting that connects
            clinics to the Department of Health and PhilHealth. These are the six projects, newest first.
          </p>

          <ol className="mt-12 border-t-4 border-ink md:mt-16">
            {PROJECTS.map((p) => (
              <li
                key={p.name}
                className="grid gap-x-10 gap-y-4 border-b border-ink/15 py-12 md:py-16 lg:grid-cols-[12rem_minmax(0,1fr)]"
              >
                <p className="lettering tabular text-3xl text-court md:text-4xl">{p.year}</p>
                <article aria-labelledby={`project-${p.name}`}>
                  {/* Acronyms keep their own casing (eMHPRe, TaMaHRRiND), so no forced caps here. */}
                  <h2 id={`project-${p.name}`} className="lettering text-[clamp(1.75rem,3.4vw,2.75rem)] normal-case">
                    {p.name}
                  </h2>
                  <p className="mt-2 max-w-measure font-serif text-lg italic text-ink-soft">{p.fullName}</p>
                  <p className="label mt-5 space-y-1.5">
                    <span className="block text-ink">{p.role}</span>
                    <span className="tabular block text-court">{p.period}</span>
                  </p>
                  <div className="mt-6 max-w-measure space-y-5 text-lg leading-relaxed text-ink-soft">
                    {p.body.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-6 max-w-measure space-y-2 border-t border-ink/15 pt-4">
                    <p className="label text-ink-soft">{p.partners}</p>
                    <p className="label text-court">{p.stack}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
