import Image from 'next/image'

export const BlogHighLight = ({ posts }) => {
  console.log(posts)
    return (
      <div className="container lighter-bg text-dark p-3">
        
        <div className="row">
          <h4 className="blog mb-3">Blog</h4>
        {posts && posts.map((post) => (
          <div key={post.slug} className="col-4">
            <div className="card">
              <Image src="/images/ph.jpeg" width={100} height={100} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>

                <p className="card-text">{ post.description }</p>

                <div className="d-flex align-items-center justify-content-center">
                  <a href="#" className="link-primary">Read More</a>
                  {/* <Image src="/images/medium-brand.svg" width={30} height={30} alt="Read on Medium" /> */}
                </div>
                
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
}

export default BlogHighLight