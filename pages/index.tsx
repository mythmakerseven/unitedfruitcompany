import type { NextPage } from 'next'
import Head from 'next/head'
import TypewriterScript from '../components/TypewriterScript'
import HomeGrid from '../components/HomeGrid'
import Hero, { Side } from '../components/Hero'
import { Main, MainContent, NavbarPlaceholder, Title } from '../styles/Home.style'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>United Fruit Company</title>
        <meta name="description" content="The United Fruit Company, 1899-1970." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <MainContent>
          <NavbarPlaceholder />
          <Title>
            <TypewriterScript text={'United Fruit Company'} />
          </Title>

          <p>
            <TypewriterScript text={'History Project'} />
          </p>

          <HomeGrid />
        </MainContent>
      </Main>

      <Hero
        header='Testing!'
        text='This is a test of the reusable hero module.'
        picturePath='/opengraph.jpg'
        pictureAltText=''
        side={Side.Left}
      />

      <Hero
        header='Wow!'
        text='It actually works! Excuse me for a moment while I vomit some placeholder text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at dicta nam deserunt earum sit sapiente aliquam? Sint delectus consectetur illum aut odio. Iusto dolor est repellat totam veniam odio?'
        picturePath='/img/map.webp'
        pictureAltText=''
        side={Side.Right}
      />

      <Hero
        header='Gabriel García Márquez'
        text='A bunch of authors have included the United Fruit Company in their books. Gabriel García Márquez (pictured), Thomas Pynchon, and many more have been inspired by the history of the company as detailed on this site.'
        picturePath='/img/gabriel-garcia-marquez.jpg'
        pictureAltText=''
        side={Side.Left}
      />

    </div>
  )
}

export default Home
