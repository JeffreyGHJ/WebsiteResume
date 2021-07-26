import React from 'react'
import Fade from 'react-reveal/Fade'
import './detail.styles.wall2.css'
import './detail.styles.wall3.css'
import './detail.styles.list.css'

const imageTrue = (design, image_url, name ) => {
  return image_url ? 
    <img 
      className={`${design}-photo`} 
      src={image_url} alt={name} 
    /> 
    : 
    <h2 className={`${design}-h2`}>{name}</h2>
}
export const Detail = ({ group, design }) => {
  const { name, site_url, image_url, role, location, timeframe, description, highlights } = group
  if (design === 'list') {
    return (
      <Fade bottom>
        {site_url ?
          <a 
            href={site_url} 
            target="_blank" 
            rel='noopener noreferrer'
          > 
            <h2 className={`${design}-h2`}>{name}</h2> 
          </a>
          :
          <h2 className={`${design}-h2`}>{name}</h2> 
        }
        <figure className={design}>
          <figcaption className={`${design}-figcaption`} >
            <h3 className={`${design}-h3`}>{role} {'/'} {location} {'/'} {timeframe} </h3>
            <p className={`${design}-p`}>{description}</p>
          </figcaption>
        </figure>
      </Fade>
    )
  } else {
    return (
      <Fade bottom>
        <figure className={design}>
          {site_url ?
            <a 
              href={site_url} 
              target="_blank" 
              rel='noopener noreferrer'
            > 
              {imageTrue(design, image_url, name )} 
            </a>
            :
            <div> {imageTrue(design, image_url, name )} </div>
          }
          <figcaption className={`${design}-figcaption`}>
            <h3 className={`${design}-h3`}>{`${role}`} </h3>
            <p className={`${design}-p`}>{description}</p>
            <ul className={`${design}-ul`}>
              {highlights.map((item, index) => <li key={index} className={`${design}-li`}> {item} </li>)}
            </ul>
            <h3 className={`${design}-h3`}>{`[${location}] ${timeframe}`} </h3>
          </figcaption>
        </figure>
      </Fade>
    )
  }
}