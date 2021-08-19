import Nav from '../components/nav'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <Nav activeItem="about" />
            <div className="container">
                <div className="about-container d-flex align-items-end">
                <p>With over { new Date().getFullYear() - 2012 } years of professional full-stack web application development experience, I have come to realize many important things in the domain of software development. Although I don't currently know C++ that well, it was the first language I learned at the age of 13. I've always been interested in the skill to create something from nothing. All you need to learn is how computers work and their languages and you can create very powerful things. Potentially world-changing things. I don't think I'll ever loose the passion for creating asthetically functional software that provides high value to people.</p>
                </div>
            
            </div>
        </div>
    )
}

export default About