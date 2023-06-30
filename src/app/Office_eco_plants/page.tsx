import React from 'react'

export default function Office_eco_plants() {
  return (
    <header className='min-h-screen sm:h-full w-full flex flex-col justify-evenly sm:flex-row'>
      <section className='max-w-xl sm:w-2/4  sm:h-full h-screen mx-auto px-4 flex items-start justify-center flex-col text-center sm:text-left'>
            <h1 className='text-7xl w-96 font-bold mb-10'>Office eco plants</h1>
            <p className='w-96'>The growth of the plants will offer a varying appearance for returning costumers. Vine plants and ivy seeded inside some pots</p>
            <div className='flex gap-10  mt-20 sm:self-start self-center'>
              <div className='w-20 h-20 rounded-full  bg-zinc-900'></div>
              <div className='w-20 h-20 rounded-full  bg-zinc-900'></div>
              <div className='w-20 h-20 rounded-full  bg-zinc-900'></div>
            </div>
      </section>
      <section className=" w-full h-screen bg-officeEco bg-cover bg-center flex items-center justify-center sm:w-2/4" >
            <div className='w-32 h-32 rounded-full flex items-center justify-center bg-zinc-50 cursor-pointer'><p className='text-3xl'>GO</p></div>
      </section>
    </header>
  )
}