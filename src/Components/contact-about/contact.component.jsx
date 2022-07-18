import React from 'react'
import Fade from 'react-reveal/Fade'
import { Skill } from './skill/skill.component'
import './contact.styles.css'
import ProgressBar from './progress-bar/progress-bar.component'

export const Contact = props => {
  const image = props.personal.image
  const about = props.personal.about
  const skills = props.personal.skills
  const frameworks = props.personal.frameworks
  const software = props.personal.software
  const editors = props.personal.editors
  const tools = props.personal.tools
  const environments = props.personal.environments
  return (
    
    <div className='contact'>
      <div className='header-gradient'>
        <button className='project-button'>
            <a /* href="https://jeffreyghj-spring-users.herokuapp.com/" */ href="https://react-monster-cards.vercel.app/" target="_blank" rel="noopener noreferrer">
                Click Here To View My Current Project!
            </a>
        </button>
      </div>
      <h2 className='section-title-about'> About </h2>
      <Fade bottom>
        <div className='about-grid'>
          <div className='about'>
            <div className='info-section'>
              <img className='contact-img' src={image} alt="Jeffrey G. Hernandez"></img>
              <div className='spacer'></div>
              <p className='contact-p'> {about} </p>
            </div>

            <div className='skills-section'>
                <p className='skills-heading'> My Skills: </p>

                <Fade bottom>
                <div className='progress-section'>
                  <Fade bottom>
                  {/*<p className='skills-heading'> Progress: </p>*/}
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[0]}
                    </div>
                    <div className='progress-entry-visual'>
                      {/*<ProgressBar variant="success" now={90} />*/}
                      <ProgressBar bgcolor='green' completed={90}/>
                    </div>
                  </div>
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[1]}
                    </div>
                    <div className='progress-entry-visual'>
                      <ProgressBar bgcolor='green' completed={95}/>
                    </div>
                  </div>
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[2]}
                    </div>
                    <div className='progress-entry-visual'>
                      <ProgressBar bgcolor='green' completed={85}/>
                    </div>
                  </div>
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[3]}
                    </div>
                    <div className='progress-entry-visual'>
                      <ProgressBar bgcolor='green' completed={60}/>
                    </div>
                  </div>
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[4]}
                    </div>
                    <div className='progress-entry-visual'>
                      <ProgressBar bgcolor='green' completed={70}/>
                    </div>
                  </div>
                  <div className='progress-entry'>
                    <div className='skill'>
                    {skills[5]}
                    </div>
                    <div className='progress-entry-visual'>
                      <ProgressBar bgcolor='green' completed={60}/>
                    </div>
                  </div>
                  </Fade>
                </div>
                </Fade>
                {/*
                <div className='skills-grid'>
                  {skills.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
                */}
                <div className='skills-grid'>
                  {frameworks.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
                <div className='skills-grid'>
                  {software.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
                <div className='skills-grid'>
                  {editors.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
                <div className='skills-grid'>
                  {tools.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
                <div className='skills-grid'>
                  {environments.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
                </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}