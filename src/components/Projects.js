import { HiOutlineCode } from 'react-icons/hi'
import {projects} from '../data'

const Projects = () => {
    return (
        <section id="projects" class="projects">
            <div class="proj-items">
                <div className="proj-header">
                    <HiOutlineCode size={32} color='#439A86'/>
                    <h1 className="proj-intro">
                        Apps I've Built
                    </h1>
                    <p className="proj-def">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className='proj-grid'>
                    {projects.map((project) => (
                    <div class="card" style={{backgroundImage: 'url(' + project.image + ')'}} >
                        <div class='card-content'> 
                            <h2 class="card-title">{project.title}</h2>
                            <p class="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto nemo 
                            numquam, neque vero aliquid obcaecati quisquam.
                            </p>
                            <a href="#about" class="button"> Learn more</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
