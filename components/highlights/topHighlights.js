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
          <h4 className="blog mb-3">Resources</h4>
            <h6>Tracks</h6>
            <table className="table table-sm table-xs">
              <tbody>
                <tr>
                  <td>
                  
                  <iframe width="100%" height="75" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  
                  
                  </td>
                  <td>
                  <iframe width="100%" height="75" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                  </td>
                </tr>
              </tbody>
              
            </table>

            <h6>Templates</h6>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Platform</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#" className="link-primary">Income Statement</a></td>
                  <td>Financial</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Google Sheets</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td><a href="#" className="link-primary">Balance Sheet</a></td>
                  <td>Financial</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Google Sheets</td>
                  <td>Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default TopHighlights