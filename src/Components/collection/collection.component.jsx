import React from 'react'
import { Detail } from './detail/detail.component'
import './collection.styles.wall2.css'
import './collection.styles.wall3.css'
import './collection.styles.list.css'

export const Collection = props => {
  const section = props.section
  const groups = props.groups
  const design = props.design
  return (
    <div className={section}>
      <h2 className='section-title-about'> {section} </h2>
      <div className={`${design}-grid`}>
        {groups.map((group, index) => <Detail key={index} group={group} design={design}></Detail>)}
      </div>
    </div>
  )
}
