import React from 'react';
import { skills } from '../data';
import git from '../git.png'

const Skills = () => {
  return (
  <section id="skills" class="skills">
    <div className='skills-content'>
        <h1>My skills</h1>
        <div className='skill-grid'>
            {skills.map((skill) => (
                <div key={skill.id}>
                    <img src={skill.image} alt={skill.name} style={{maxWidth: '120px'}} />
                    <h1>{skill.name}</h1>
                </div>
            ))}
        </div>
    </div>
  </section>
  ) 
};

export default Skills;
