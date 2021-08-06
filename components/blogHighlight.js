

export const BlogHighLight = ({ posts }) => {
    return (
      <div className="container lighter-bg text-dark p-3">
        <h3>Blog Highlights</h3>
        <div className="row mt-4">
        {posts && posts.map((post) => (
          <div key={post.Slug} className="col-4">
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