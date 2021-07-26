import React from 'react'
import './social-icon.styles.css'

export const SocialIcon = props => (
  <li className='social-icon'>
    <a className='social-icon-link'
      href={props.icon.profile_url} 
      target="_blank" 
      rel='noopener noreferrer'>
      <img className='social-icon-img'
        src={props.icon.icon_url} 
        alt={props.icon.name}>
      </img>
    </a>
  </li>
)