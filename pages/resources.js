import Nav from '../components/nav'
import DownloadIcon from '../components/icons/download'

export const Resources = () => {
    return (
        <div>
            <Nav activeItem="resources" />
            <div className="container">
            <h2>Resources</h2>
            <div className="row resources-container">
                <div className="col-sm-12 col-lg-6">
                    <h4>Tracks</h4>

                    <iframe width="100%" height="80" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <iframe width="100%" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <iframe width="100%" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074313741&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className="col-sm-12 col-lg-6">
                    <h4>Templates</h4>

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

                <div className="col-12 py-3 mt-2">
                    <h4>Investing Tools</h4>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mt-4">
                            <img src="/images/aspiration-logo.png" alt="Aspiration Banking" width="200px" />
                        </div>
                        <div className="col-sm-12 col-md-8 mt-4">
                            Aspiration is a Certified Benefit Coroporation (B-Corp) pledging to do better banking by not investing in fossil fuels. If you want to invest in cleaner money and a cleaner environment, while being a part of reforesting efforts, join now.
                        </div>

                        <div className="col-sm-12 col-md-4 mt-4">
                            <img src="/images/robinhood.png" alt="Robinhood Investing" width="200px" />
                        </div>
                        <div className="col-sm-12 col-md-8 mt-4">
                            Robinhood makes investing easy. Almost too easy. Their user interface is one of the best I've seen, and bonus points for default dark modes. Simple yet effective, Robinhood gives you a lot of power in simple interfaces. I'm currently growing a small portfolio in Robinhood.
                        </div>


                        <div className="col-sm-12 col-md-4 mt-4">
                            <img src="/images/webull-logo.jpg" alt="Webull" width="200px" />
                        </div>
                        <div className="col-sm-12 col-md-8 mt-4">
                            Webull promises enjoyable investing with their high-yet-simple tech. They've done a pretty good job in my opinion. Their site and their apps look beautiful and modern.
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default Resources