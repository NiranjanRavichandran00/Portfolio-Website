import Typical from 'react-typical';
import coding from '../coding.png'

const About = () => {
    return (
        <section id="about" class="about">
            <div class = "about-me">
                <div class="about-text">
                    <h1 class = "about-title">Niranjan Ravichandran</h1>
                    <Typical
                            className = "about-typical"
                            steps={['React JS Developer', 5000, 'UI/UX Designer', 5000]}
                            loop={Infinity}
                    />
                    <p className="about-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1wunv9OL3zJMJhw1lzn98iCH3Gt-7qIPK"
                        className="work-btn">
                        Resume
                    </a>
                </div>
                <div className="img-box">
                    <img
                        class= "about-img"
                        alt="Niranjan"
                        src= {coding}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
