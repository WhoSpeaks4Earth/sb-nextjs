import Image from 'next/image'

export const SiteBanner = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
            <div class="carousel-inner">
                <div class="carousel-item active px-4">
                <div className="carousel-card coder">
                    <div className="carousel-content">
                    <h2>Full-Stack Web Application Developer</h2>
                    <p>Over { new Date().getFullYear() - 2012 } years of professional experience from user experience (UX) to servers, containers, databases and everything in between. I believe in creating beautifully functional applications that are of high value to its users.</p>
                    <button className="btn btn-primary">View my GitHub</button>
                    </div>
                    
                </div>
                </div>
                <div class="carousel-item">
                <div className="carousel-card competencies">
                    <div className="carousel-content">
                        <h2>Other Competencies</h2>
                        <p>
                            <ul class="list-group">
                            <li class="list-group-item">Investing</li>
                            <li class="list-group-item">Music Production</li>
                            <li class="list-group-item">Film Production</li>
                            <li class="list-group-item">Writing</li>
                            <li class="list-group-item">Graphic Design</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                <div className="carousel-card philanthropy">
                    <div className="carousel-content">
                        <h2>❤ Where I Donate</h2>
                        <p>
                            <ul class="list-group text-sm">
                                <li class="list-group-item">Planetary Society</li>
                                <li class="list-group-item">Greenpeace</li>
                                <li class="list-group-item">GPB/NPR</li>
                                <li class="list-group-item">Wikipedia</li>
                                <li class="list-group-item">Children's International</li>
                                <li class="list-group-item">Sierra Club</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        {/* <div className="row text-center light-bg site-banner">
            <div className="col-sm-12 col-md-3 d-flex align-items-center justify-content-center p-3">

            <Image src="/images/sb-logo-new.png" width={150} height={150} />

            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                asdf
            </div>
            <div className="col-sm-12 col-md-3 p-3">
            <ul className="list-group">
                <li className="list-group-item text-sm">Full-Stack App Developer</li>
                <li className="list-group-item text-sm">Investor</li>
                <li className="list-group-item">Hobbiest Music/Film Producer</li>
                <li className="list-group-item text-sm">Graphic Designer</li>
                <li className="list-group-item">Writer</li>
                <li className="list-group-item">Entrepreneur</li>
            </ul>
            </div>
        </div> */}
        </div>
    )
}

export default SiteBanner