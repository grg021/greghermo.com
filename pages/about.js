import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import { H1 } from './styled'
import tw from "tailwind-styled-components"
import Emoji from '../components/emoji'

const Paragraph = tw.p`my-5`

export default function About() {
    return (
      <>
        <Layout>
          <Head>
            <title>About | Greg Hermo</title>
          </Head>
          <Container>
            <H1>About Me</H1>
            <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
            <Paragraph>
                Hey there, my name is Greg. I'm a husband, a dad and an avid cylist. <Emoji symbol="🚴‍♂️" label="biking"/>
            </Paragraph>
            <Paragraph>
                I do software development as a profession and as a hobby. In short, I love coding!
                Currently, I'm a Senior Software Engineer at ContactOut using Laravel PHP and React.
            </Paragraph>
            <Paragraph>
                I grew up in a small town in Sorsogon, Philippines and went to school at the University of the Philippines
                Los Baños, graduating with a degree in BS Computer Science, 2009. <Emoji symbol="🧑‍🎓" label="graduate" />
            </Paragraph>
            </div>
          </Container>
        </Layout>
      </>
    )
  }