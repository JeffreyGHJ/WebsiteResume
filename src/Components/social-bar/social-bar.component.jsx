import React from 'react'
import { SocialIcon } from './social-icon/social-icon.component'
import './social-bar.styles.css'

export const SocialBar = props => (
  <div className='social-icon-grid'>
    <ul>
      {props.icons.map((icon, index) => <SocialIcon key = {index} icon={icon}></SocialIcon>)}
    </ul>
  </div>
)