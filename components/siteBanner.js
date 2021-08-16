import Image from 'next/image'

export const SiteBanner = () => {
    return (
        <div className="container">
        <div className="row text-center light-bg site-banner">
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
        </div>
        </div>
    )
}

export default SiteBanner