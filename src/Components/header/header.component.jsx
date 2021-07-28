import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import './header.styles.css'
import Particles from 'react-tsparticles'

const particleStyle = {
  position: 'absolute',
  width: '100%',
  height: ' 100vh',
  top: 0
}

class ParticlesContainer extends Component {
  render () {
    return (
      <>
        <Particles
          style={particleStyle}
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onhover: {
                  enable: true,
                  mode: 'grab'
                }
              },
              modes: {
                push: {
                  quantity: 1
                },
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.1
                  }
                }
              }
            },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800
                },
                value: 30
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                random: true,
                value: 5
              }
            },
            detectRetina: true
          }}
        />
      </>
    )
  }
}


export const Header = props => {
  const name = props.personal.name
  const headline = props.personal.headline
  const email = props.personal.email
  return (
    <div className='home'>
      <ParticlesContainer />
      <div className='header'>
        

            <h1 className='header-h1'><Fade bottom> {name} </Fade></h1>
            <h1 className='header-h2'><Fade bottom> {headline} </Fade></h1>
            <button className='header-email-button'>
              <a 
                href={`mailto:${email}`} 
                rel="noopener noreferrer" > 
                  Contact Me 
              </a>
            </button>

      </div>
    </div>
  )
}