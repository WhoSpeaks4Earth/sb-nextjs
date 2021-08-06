
export const HighLight = () => {
    return (
        <div className="container">
        <div className="row text-center light-bg">
            <div className="col-8 p-3">
                Full-Stack Web Application Developer
                <small className="text-highlight d-block">{ new Date().getFullYear() - 2013 }+ Years Experience</small>
            </div>
            <div className="col p-3">
            Also Dabbles In:
            <ul class="list-group">
                <li class="list-group-item text-sm">Writing</li>
                <li class="list-group-item">Creating Music</li>
                <li class="list-group-item">Video/Graphic Design and Production</li>
                <li class="list-group-item">Gardening</li>
                <li class="list-group-item">Backpacking</li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default HighLight