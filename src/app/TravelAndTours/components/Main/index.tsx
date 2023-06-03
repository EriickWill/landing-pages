import React from 'react'

import {MainPage,Welcome} from './style'

import { Abril_Fatface } from 'next/font/google'

const abrilFatface = Abril_Fatface({ 
  weight: '400',
  subsets: ['latin'] 
})


export default function Main() {
  return (
    <MainPage>
        <Welcome className='alinhamento'>
            <div className='img'></div>
            <div className='text'>
                <h2 className={abrilFatface.className}>Welcome to Our Website</h2>
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
