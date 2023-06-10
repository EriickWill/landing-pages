import React from 'react'

import {MainPage,Welcome} from './style'

type props = {
  font:{className:string}
}

export default function Main({font}:props) {
  return (
    <MainPage>
        <Welcome className='alinhamento'>
            <div className='img'></div>
            <div className='text'>
                <h2 className={font.className}>Welcome to Our Website</h2>
                <p>Far Far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean </p>
                <p>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia
                </p>
                <button>Watch the Video</button>
            </div>
        </Welcome>
    </MainPage>
  )
}
