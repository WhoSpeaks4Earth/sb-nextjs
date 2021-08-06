

export const BlogHighLight = ({ posts }) => {
    return (
        <div className="container">
            <h1>Blog Favorites</h1>
            <div className="row">

            {posts && posts.map((post) => (
        <div key={post.Slug} className="col">
          <div className="card">
            {/* <img src="vercel.svg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{ post.Title }</h5>
              <p className="card-text">{ post.Description }</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      ))}


            </div>
        </div>
    )
}

export default BlogHighLight