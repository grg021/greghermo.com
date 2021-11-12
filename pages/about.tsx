import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import { H1, H2 } from '../lib/styled'
import tw from "tailwind-styled-components"
import Emoji from '../components/emoji'
import {IcoDot, IcoLaravel, IcoReact, IcoJest, IcoPhpStorm, IcoVue, IcoDocker, IcoTailwind} from "../components/icons";

const Paragraph = tw.p`my-6`
const List = tw.ul`space-y-2 mt-2`
const ProgressBar = tw.div`
    shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
`
const IconContainer = tw.div`
  flex sm:flex-col text-center text-sm text-gray-500 items-center
`

export default function About() {

  const lang = [
    {
      skill: 'PHP',
      percent: '31%',
      color: '#4F5D95'
    },
    {
      skill: 'JavaScript',
      percent: '5%',
      color: '#f1e05a'
    },
    {
      skill: 'TypeScript',
      percent: '26%',
      color: '#2b7489'
    },
    {
      skill: 'Vue',
      percent: '12%',
      color: '#41b883'
    },
    {
      skill: 'Blade',
      percent: '8%',
      color: '#f7523f'
    },
    {
      skill: 'CSS',
      percent: '4%',
      color: '#563d7c'
    },
    {
      skill: 'Shell',
      percent: '1%',
      color: '#89e051'
    },
    {
      skill: 'HTML',
      percent: '10%',
      color: '#e34c26'
    },
    {
      skill: 'Other',
      percent: '3%',
      color: '#CCC'
    },
  ];

  return (
      <Layout>
          <Head>
              <title>About | Greg Hermo</title>
          </Head>
          <Container>
              <H1>About</H1>
              <div className="mb-8 leading-8 text-gray-600 dark:text-gray-400">
                  <Paragraph>
                      Hi there! My name is Greg. If I were to introduce myself I would say I&apos;m
                      <List>
                          <li>a faithful husband 👩🏻‍❤️‍👨🏽</li>
                          <li>loving father 👨‍👧‍👦 <em>(of two as of this writing)</em></li>
                          <li>professional software engineer 🧑🏽‍💻 </li>
                          <li>and an avid cyclist. 🚴🏽‍♂️</li>
                      </List>
                  </Paragraph>
                  <Paragraph>
                      I grew up in a small town in Sorsogon and went to school at the University of the Philippines
                      Los Baños, graduated with a degree in BS Computer Science, 2009. <Emoji symbol="🧑‍🎓" label="graduate" />
                  </Paragraph>
                  <Paragraph>
                      <H2>I <Emoji symbol="❤️" label="graduate" /> coding, problem solving, optimizing, troubleshooting and debugging.</H2>
                      Currently, I&apos;m a Senior Software Engineer at ContactOut using Laravel PHP and React.
                      Some fun facts:
                      <List>
                        <li>First programming language - Turbo Pascal (2003)</li>
                        <li>Laravel PHP artisan since the early version of 4.2 circa 2014</li>
                        <li>Co-founder of two tech start-ups</li>
                        <li>Won IdeaSpace PH 2015 as Vinteo{' '}
                            <em><a className='underline'
                                   rel="noopener noreferrer"
                                   href="https://www.techinasia.com/ideaspace-2015-startup-competition-winners">techinasia.com</a></em>
                        </li>
                      </List>
                  </Paragraph>
                  <Paragraph>
                      <H2>Languages</H2>
                      <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
                        {
                          lang.map(val => {
                            return (
                              <ProgressBar key={val.skill} style={{ width: val.percent, background: val.color }} />
                            )
                          })
                        }
                      </div>
                          <div className="py-8 w-full max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {
                              lang.map(val => {
                                return (
                                  <div key={val.skill} className={'flex items-center text-sm'}>
                                    <IcoDot fill={val.color} />
                                    <span className={'mr-2'}>{ val.skill }</span>
                                    <span>{ val.percent }</span>
                                  </div>
                                )
                              })
                            }
                          </div>
                      </div>
                    <div className={'place-content-center sm:flex sm:'}>
                      <IconContainer>
                        <IcoLaravel className={'h-20 w-20 p-4'} />
                        <span>Laravel</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoReact className={'h-20 w-20'} />
                        <span>React</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoTailwind className={'h-20 w-20 p-4'} />
                        <span>tailwindcss</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoJest className={'h-20 w-20'} />
                        <span>Jest</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoVue className={'h-20 w-20 p-5'} />
                        <span>Vue</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoDocker className={'h-20 w-20 p-4'} />
                        <span>Docker</span>
                      </IconContainer>
                      <IconContainer>
                        <IcoPhpStorm className={'h-20 w-20 p-4'} />
                        <span>PHPStorm</span>
                      </IconContainer>
                    </div>
                  </Paragraph>
                <Paragraph>
                  <H2>Education</H2>
                  <div className={'bg-red-50 p-4 rounded mb-2 flex flex-col sm:flex-row'}>
                    <img src={'/assets/about/up-logo.svg'}
                         alt={'UP Logo'}
                         className={'w-24 object-contain place-self-center sm:mr-4 mb-4 sm:mb-0'} />
                    <div className={'flex flex-col'}>
                      <span className={'font-medium text-lg'}>University of the Philippines Diliman</span>
                      <span>Masters of Science in Computer Science</span>
                      <span className={'text-gray-400'}>2014, 25 Units with 1.21 GPA (A+)</span>
                    </div>
                  </div>
                  <div className={'bg-gray-50 p-4 rounded mb-2 flex flex-col sm:flex-row'}>
                    <img src={'/assets/about/up-logo.svg'}
                         alt={'UP Logo'}
                         className={'w-24 object-contain place-self-center sm:mr-4 mb-4 sm:mb-0'} />
                    <div className={'flex flex-col'}>
                      <span className={'font-medium text-lg'}>University of the Philippines Los Baños</span>
                      <span>Bachelors of Science in Computer Science</span>
                      <span className={'text-gray-400'}>2009</span>
                    </div>
                  </div>
                </Paragraph>
              </div>
          </Container>
      </Layout>
  )
}
