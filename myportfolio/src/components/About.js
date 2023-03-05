
import Headshot from "../assets/2.jpg"
import AboutItem from "./AboutItem";
import "./AboutStyles.css"

const About = ()  => {
    return(
        <div className="about-header">
            <h1>Welcome to my portfolio</h1>

            <AboutItem heading="About Me..." text="My name is Fiama Gaitan and I am a Full Stack Web Developer.
                    I graduated from Northwestern University Coding Bootcamp and
                    I could not be more excited to take off into the career of my dreams." img1={Headshot} />
        </div>

    )
}


export default About;