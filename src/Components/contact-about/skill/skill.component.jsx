import React from 'react'
import Fade from 'react-reveal/Fade'
import './skill.styles.css'

export const Skill = props => (
  <Fade bottom>
    <div className='skill'>
       ▷ {props.skill}
    </div>
  </Fade>
)
