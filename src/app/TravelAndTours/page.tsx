"use client"
//

import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SecExperience from './components/SecExperience'

import { Abril_Fatface } from 'next/font/google'
import SecInternational from './components/SecInternational'
import Blog from './components/Blog'

const abrilFatface = Abril_Fatface({ 
  weight: '400',
  subsets: ['latin'] 
})
export default function TravelAndTours() {
  return (
    <>
      <Header font={abrilFatface}/>
      <Main font={abrilFatface}/>
      <SecExperience font={abrilFatface}/>
      <SecInternational font={abrilFatface}/>
      <Blog font={abrilFatface}/>
    </>
  )
}
