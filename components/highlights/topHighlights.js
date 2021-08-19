import Image from 'next/image'
import DownloadIcon from '../icons/download'

const TopHighlights = () => {
    return (
        <div className="container lighter-bg text-dark p-3">
        
        <div className="row">

          <div className="col-sm-12 col-lg-6">
          <div className="col-12 blog d-flex w-100 justify-content-between">
                <h4 className="blog mb-3">Tracks</h4>
                <a href="#" className="link-secondary">View SoundCloud</a>
            </div>
            <iframe width="100%" height="60" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="100%" height="60" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="100%" height="60" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313741&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>          
          </div>
          

          {/* <div className="col-sm-12 col-lg-6">
              <h4 className="blog mb-3">Tracks</h4>
              <div className="d-flex justify-content-between align-items-center">
              <figure className="figure">
                <Image src="/images/the-loiter-logo.png" width={250} height={250}alt="The Loiter Blog" />
                <figcaption className="figure-caption">A caption for the above image.</figcaption>
            </figure>
              <p className="w-50 text-muted p-2">Started as an idea for a creative outlet for both myself and my close friends,
              &nbsp;The Loiter became an official <a href="http://medium.com/the-loiter" target="_blank" className="link-secondary">Medium publication</a> 
              &nbsp;in 2021 that provides entertaining stories and articles on life and lifestyle - past and future.</p>
              </div>
              
          </div> */}

          <div className="col-sm-12 col-lg-6">
          <h4 className="blog mb-3">Templates</h4>
            <table className="table table-sm">
              <thead>
                <tr>
                
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Income Statement</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Financial</td>
                  <td>Free</td>
                  <td>
                    <a href="#" className="link-secondary"><DownloadIcon /></a>
                  </td>
                </tr>
                <tr>
                  <td>Balance Sheet</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Financial</td>
                  <td>Free</td>
                  <td>
                  <a href="#" className="link-secondary"><DownloadIcon /></a>
                  </td>
                </tr>
                <tr>
                  <td>Amortization Sheet</td>
                  <td><img src="/images/google-sheets-logo.png" width="15px" class="figure-img img-fluid rounded" alt="..." /> Financial</td>
                  <td>Free</td>
                  <td>
                  <a href="#" className="link-secondary"><DownloadIcon /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default TopHighlights