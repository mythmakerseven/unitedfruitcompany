import type { NextPage } from 'next'
import Head from 'next/head'
import TypewriterScript from '../components/TypewriterScript'
import HomeGrid from '../components/HomeGrid'
import Hero, { Side } from '../components/Hero'
import {
  Main,
  MainContent,
  NavbarPlaceholder,
  Title,
} from '../styles/Home.style'

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
            <TypewriterScript
              text={'United Fruit Company'}
              averageDuration={2000}
            />
          </Title>

          <p>
            <TypewriterScript
              text={'History Project'}
              averageDuration={1500}
            />
          </p>

          <HomeGrid />
        </MainContent>
      </Main>

      <Hero
        header={'"A Great Fruit Combine"'}
        text='Founded in 1899, the United Fruit Company would go on to be one of the most influential corporations in the twentieth century, and a pioneer of modern marketing techniques.'
        picturePath='https://unitedfruitcompany.files.wordpress.com/2020/06/ufc-announcement.png?w=600'
        pictureAltText='Newspaper announcement of the founding of the United Fruit Company'
        side={Side.Left}
      />

      <Hero
        header='Cabbages and Kings'
        text={'The company\'s influence spanned across Latin America, ranging from the Caribbean to Central and South America.'}
        picturePath='https://unitedfruitcompany.files.wordpress.com/2021/11/map.jpg?w=1200'
        pictureAltText='Map of the United States, Mexico, and Central America published by the United Fruit Company.'
        side={Side.Right}
      />

      <Hero
        header='Gabriel García Márquez'
        text='Many authors have mentioned the United Fruit Company in their books. Gabriel García Márquez (pictured), Thomas Pynchon, O. Henry, Pablo Neruda, and many more have been inspired by the history of the company as detailed on this site.'
        picturePath='https://unitedfruitcompany.files.wordpress.com/2021/11/gabriel-garcia-marquez.jpg?w=600'
        pictureAltText='Portrait of Gabriel García Márquez'
        side={Side.Left}
      />

    </div>
  )
}

export default Home
