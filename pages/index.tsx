import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriterScript from '../components/TypeWriterScript'
import Secret from '../components/Secret'
import NavGrid from '../components/NavGrid'

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
