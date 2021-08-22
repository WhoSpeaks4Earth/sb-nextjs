import Nav from '../components/nav'

const Contact = () => {

    const onSubmit = (form) => {
        console.log('submit', form)
        debugger
    }
    return (
        <div>
            <Nav activeItem="contact" />
            <div className="container">
            
                <h2>Contact Me</h2>

                <form className="p-4 dark-bg text-center" onSubmit={(form) => onSubmit(form)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="email" className="form-control" id="name" />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email address</label>
                    <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="desc" className="form-label">What are you reaching out about?</label>
                    <textarea className="form-control" id="desc" rows="3"></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                

                
            
            </div>
        </div>
    )
}

export default Contact