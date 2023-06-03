import React from 'react'

import { HeaderPage,TextHeader,NavBar } from './style'

import { Abril_Fatface } from 'next/font/google'

const abrilFatface = Abril_Fatface({ 
  weight: '400',
  subsets: ['latin'] 
})


export default function Header() {
  return (
    <HeaderPage>
          <NavBar>
            <div className='alinhamento'>
              <p className={abrilFatface.className}>Travel</p>
              <p>Menu</p>
            </div>
          </NavBar>
          <TextHeader>
            <div>
              <h1 className={abrilFatface.className}>Travel & Tours</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam quis enim. Assumenda excepturi maiores </p>
              <button>Click Here</button>
            </div>
          </TextHeader>
      </HeaderPage>
  )
}
