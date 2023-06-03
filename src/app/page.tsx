"use client"

import { useState } from 'react'
export default function Home() {

  const [cont,setCont] = useState(0)

  function aumentar(){
    setCont(prev => prev + 1)
  }

  return (
    <div>
        <h1>ola</h1>
    </div>
  )
}
