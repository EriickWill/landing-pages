import React from 'react'
import {Section,SecTitle,GridContainer} from './style' 
type props = {
  font:{className:string}
}

function SecExperience( {font}:props ) {
  return (
    <Section className='alinhamento'>
        <SecTitle>
          <h2 className={font.className}>Experience Once In Your Life Time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate. Consequatur saepe adipisci excepturi?</p>
        </SecTitle>
        <GridContainer>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Good Foods</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Travel Anywhere</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Airplane</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Beach Resort</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Mountain Climbing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
          <div className='box'>
            <div className='img'></div>
            <h3 className={font.className}>Hot Air Ballon</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate.</p>
          </div>
        </GridContainer>
    </Section>
  )
}

export default SecExperience