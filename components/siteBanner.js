
export const SiteBanner = () => {
    return (
        <div className="container">
        <div className="row text-center light-bg">
            <div className="col-8 p-3">

            ❤ made by yours truly using <a href="https://strapi.io/" target="_blank" className="link-secondary">strapi</a> and <a href="https://nextjs.org/" className="link-secondary" target="_blank">nextjs</a>

            </div>
            <div className="col p-3">
            <ul className="list-group">
                <li className="list-group-item text-sm">Full-Stack App Developer</li>
                <li className="list-group-item text-sm">Investor</li>
                <li className="list-group-item text-sm">Graphic Designer</li>
                <li className="list-group-item">Audio/Video Producer</li>
                <li className="list-group-item">Writer</li>
                <li className="list-group-item">Entrepreneur</li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default SiteBanner