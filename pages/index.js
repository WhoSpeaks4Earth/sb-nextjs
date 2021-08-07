import Head from 'next/head'
import Nav from '../components/nav'
import SiteBanner from '../components/siteBanner'
import HighLight from '../components/highlight'
// import styles from '../styles/Home.module.scss'
import BlogHighLight from '../components/blogHighlight'
import Footer from '../components/footer'

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>Shawn Bahramy</title>
        <meta name="description" content="money, tech, tools, creative short films" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {/* <SiteBanner /> */}
      

      <main className="container">
        
      <HighLight />

      <h3 className="mt-4">Highlights</h3>
      <BlogHighLight posts={posts} />
      </main>

      <footer className="container">
        <Footer />
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