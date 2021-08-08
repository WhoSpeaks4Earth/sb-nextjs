import Image from 'next/image'

const TopHighlights = () => {
    return (
        <div className="container lighter-bg text-dark p-3">
        
        <div className="row">
          

          <div className="col-sm-12 col-lg-6">
              <h4 className="blog mb-3">The Loiter</h4>
              <div className="d-flex justify-content-between align-items-center">
              <figure className="figure">
                <Image src="/images/the-loiter-logo.png" width={250} height={250}alt="The Loiter Blog" />
                {/* <figcaption className="figure-caption">A caption for the above image.</figcaption> */}
            </figure>
              <p className="w-50 text-muted p-2">Started as an idea for a creative outlet for both myself and my close friends,
              &nbsp;The Loiter became an official <a href="http://medium.com/the-loiter" target="_blank" className="link-secondary">Medium publication</a> 
              &nbsp;in 2021 that provides entertaining stories and articles on life and lifestyle - past and future.</p>
              </div>
              
          </div>

          <div className="col-sm-12 col-lg-6">
            <h4 className="blog mb-3">YouTube</h4>
            <div className="row">
                <div className="col-6">

                    <iframe width="300" height="215"
                    src="https://www.youtube.com/embed/hPKZ0-vyRkM">
                    </iframe>
                </div>
                <div className="col-6">

                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TopHighlights