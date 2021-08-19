
const YouTubeHighlight = () => {
    return (
        <div className="container lighter-bg text-dark p-3">
            <div className="row">
                <div className="col-12 d-flex w-100 justify-content-between">
                    <h4 className="blog mb-3">YouTube</h4>
                    <a href="#" className="link-secondary">View Channel</a>
                </div>
                    

                    <div className="col-sm-12 col-lg-6">

                    <iframe width="100%" height="320"
                    src="https://www.youtube.com/embed/4T9w0-emfGs">
                    </iframe>
                </div>
                <div className="col-sm-12 col-lg-6">

                <iframe width="100%" height="320"
                    src="https://www.youtube.com/embed/qyIl_fg72IU">
                    </iframe>

                </div>
            </div>
        </div>
    )
}

export default YouTubeHighlight