
const Post = () => {

    return (
        <div>posts</div>
    )
}

export default Post


// tell next.js how many pages there are
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:1337/posts')
    const posts = await res.json()

    const paths = posts.map(post => ({
        params: { slug: post.Slug }
    }))

    return {
        paths,
        fallback: false
    }
}

// get data for specific slug
export const getStaticProps = async ({ params }) => {
    const { slug } = params

    const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`)
    const data = await res.json()
    const post = data[0]

    return {
        props: { post }
    }
}