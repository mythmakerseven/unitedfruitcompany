import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriterScript from '../components/TypeWriterScript'
import Secret from '../components/Secret'
import NavGrid from '../components/NavGrid'
import Hero, { Side } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>United Fruit Company</title>
        <meta name="description" content="The United Fruit Company, 1899-1970." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>
            <TypeWriterScript text={'United Fruit Company'} />
          </h1>

          <NavGrid />
        </div>
      </main>

      <Hero
        header='Testing!'
        text='This is a test of the reusable hero module. '
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

      <footer className={styles.footer}>
        <p>Site created by <a href="https://camdenmecklem.com">Camden Mecklem</a>.</p>
        <p>Content created by HIS394/HNR331, proctored by Dr. Jonathan T. Reynolds.</p>
        <Secret
          child={<span>🍌</span>}
        />
      </footer>
    </div>
  )
}

export default Home
