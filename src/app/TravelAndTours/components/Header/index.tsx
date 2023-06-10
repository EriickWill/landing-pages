import React from 'react'

import { HeaderPage,TextHeader,NavBar } from './style'


type props = {
  font:{className:string}
}

export default function Header({font}:props) {
  return (
    <HeaderPage>
          <NavBar>
            <div className='alinhamento'>
              <p className={font.className}>Travel</p>
              <p>Menu</p>
            </div>
          </NavBar>
          <TextHeader>
            <div>
              <h1 className={font.className}>Travel & Tours</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam quis enim. Assumenda excepturi maiores </p>
              <button>Click Here</button>
            </div>
          </TextHeader>
      </HeaderPage>
  )
}
