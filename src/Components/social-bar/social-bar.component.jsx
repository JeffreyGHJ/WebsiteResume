import React from 'react'
import { SocialIcon } from './social-icon/social-icon.component'
import './social-bar.styles.css'
import { Link } from "react-scroll"


export const SocialBar = props => (
  <div className='social-icon-grid'>
    <ul>
      {props.icons.map((icon, index) => <SocialIcon key = {index} icon={icon}></SocialIcon>)}
    </ul>
    <p className='social-icon-grid-p'>
    </p>
    {/*NAV BAR*/}
    <ul className='nav-bar'>
          <li>
          <Link
            className='link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="home"><img src='/images/social-icons/home-icon.svg' alt='home-button'></img></span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='Education'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="education"><img src='/images/social-icons/education-icon.svg' alt='education-button'></img></span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='Projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="projects"><img src='/images/social-icons/projects-icon.svg' alt='projects-button'></img></span></Link>
        </li>
    </ul>
      
  </div>
)