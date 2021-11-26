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
        header="It's bananas!"
        text='Founded in 1899, the United Fruit Company would go on to influence much of the western hemisphere through the 20th century.'
        picturePath='https://unitedfruitcompany.files.wordpress.com/2020/06/ufc-announcement.png'
        pictureAltText='Newspaper announcement of the founding of the United Fruit Company'
        side={Side.Left}
      />

      <Hero
        header='Wow!'
        text='It actually works! Excuse me for a moment while I vomit some placeholder text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non at dicta nam deserunt earum sit sapiente aliquam? Sint delectus consectetur illum aut odio. Iusto dolor est repellat totam veniam odio?'
        picturePath='https://unitedfruitcompany.files.wordpress.com/2021/11/map.jpg'
        pictureAltText='Map of the United States, Mexico, and Central America published by the United Fruit Company.'
        side={Side.Right}
      />

      <Hero
        header='Gabriel García Márquez'
        text='A bunch of authors have included the United Fruit Company in their books. Gabriel García Márquez (pictured), Thomas Pynchon (not pictured), and many more have been inspired by the history of the company as detailed on this site.'
        picturePath='https://unitedfruitcompany.files.wordpress.com/2021/11/gabriel-garcia-marquez.jpg'
        pictureAltText='Portrait of Gabriel García Márquez'
        side={Side.Left}
      />

    </div>
  )
}

export default Home
