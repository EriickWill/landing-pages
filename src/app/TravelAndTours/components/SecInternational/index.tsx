import React, { useEffect, useRef, useState } from 'react'
import {Section,SecTitle} from './style' 
type props = {
  font:{className:string}
}
const imgs = [
  "https://images.pexels.com/photos/3996532/pexels-photo-3996532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14444212/pexels-photo-14444212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16222262/pexels-photo-16222262/free-photo-of-adobe-photoshop-riacho-enseada-luz-do-dia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
function SecInternational( {font}:props ) {
  let [cont,setCont] = useState(0)
  const [img,setImg] = useState(imgs[cont])

  useEffect(()=>{
    
    if(cont > imgs.length - 1 ){
      setCont(0)
      setImg(imgs[cont])
    }else if(cont < 0){
      setCont(imgs.length - 1)
      setImg(imgs[cont])
      console.log(cont)
    }else{
      setImg(imgs[cont])
    }
    
  },[cont])


  function Avancar(){
    setCont(ant => ++ant)
  }
  function Retroceder(){
    setCont(ant => --ant)
  }
  return (
    <Section className='alinhamento' img={img}>
        <SecTitle>
          <h2 className={font.className}>International Tour Management</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate. Consequatur saepe adipisci excepturi?</p>
        </SecTitle>

        <div className='carrosel'>
          <button onClick={Retroceder}>Retroceder</button>
          <div className='img'></div>
          <button onClick={Avancar}>Avançar</button>
        </div>
    </Section>
  )
}

export default SecInternational