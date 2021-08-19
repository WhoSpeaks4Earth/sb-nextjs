import Head from 'next/head'
import Nav from '../components/nav'
import SiteBanner from '../components/siteBanner'
// import styles from '../styles/Home.module.scss'

import Footer from '../components/footer'
import HighlightsSection from '../components/highlights/highlightsSection'

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>Shawn Bahramy</title>
        <meta name="description" content="portfolio, money, tech, blog, tools, creative short films" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>

      <Nav />

      <main className="container">
        <SiteBanner />
        <HighlightsSection posts={posts} />
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

  // const res = await fetch('http://localhost:1337/posts')
  const posts = [] // await res.json()

  // console.log(posts)

  return {
    props: { posts }
  }
}