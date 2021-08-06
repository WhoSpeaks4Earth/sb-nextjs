import Head from 'next/head'
import Nav from '../components/nav'
import SiteBanner from '../components/siteBanner'
import HighLight from '../components/highlight'
// import styles from '../styles/Home.module.scss'
import BlogHighLight from '../components/blogHighlight'

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>Shawn Bahramy</title>
        <meta name="description" content="money, tech, creative short films" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>

      <Nav />
      {/* <SiteBanner /> */}
      

      <main className="container">
        
      <HighLight />
      <BlogHighLight posts={posts} />
      </main>

      <footer>

      </footer>
    </div>
  )
}


export async function getStaticProps() {
  console.log('server side')
  // get posts from our api

  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()

  console.log(posts)

  return {
    props: { posts }
  }
}