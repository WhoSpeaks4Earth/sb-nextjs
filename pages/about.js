import Nav from '../components/nav'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <Nav activeItem="about" />
            <div className="container">
                <div className="about-img">
                </div>

                <div className="about-desc">
                <p className="mt-4">
                    I've spent most of my life in Georgia, with brief periods in California and Illinois. Karate, soccer, and great friends occupied most of my childhood. It was during middle school when I developed my interest in computers and programming.
                    In my later teen years I started writing and playing music both in school and as a hobby. I later worked full-time as an IT tech while getting my B.S. and M.S. in engineering. I eventually fell into web app development and have loved it ever since.
                </p>

                <p className="mt-4">
                    In my spare time I enjoy hiking, reading, traveling, investing, making music, cooking, and seeing what other creative ventures I can occupy myself with. I love learning new skills and perspectives. I'm currently exploring the world of screenplay writing and film making.
                </p>
                </div>
                
            </div>
        </div>
    )
}

export default About