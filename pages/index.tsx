import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriterScript from '../components/TypeWriterScript'
import Secret from '../components/Secret'
import NavGrid from '../components/NavGrid'
import { fetchPosts } from '../lib/posts'
import { Post } from '../lib/types'
import Link from 'next/link'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className='container'>
      <Head>
        <title>United Fruit Company</title>
        <meta name="description" content="The United Fruit Company, 1899-1970." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <TypeWriterScript text={'United Fruit Company'} />
        </h1>

        <NavGrid />

        <h3>Here are some cool upcoming posts:</h3>
        <ul>
          {posts.map(post => <li key={post.ID}><Link href={`/posts/${post.slug}`}>{ post.title }</Link></li>)}
        </ul>
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  return {
    props: {
      posts
    }
  }
}

export default Home
