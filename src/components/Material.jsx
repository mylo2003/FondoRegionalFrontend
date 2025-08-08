import React from 'react'
import Container from './Container'
import Button from './Button'

export default function Material() {
  return (
    <div className='bg-stone-800'>
      <Container className={'!my-0 py-15 text-white'}>
        <div className="flex flex-col items-center gap-2 mb-5">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="text-gray-300 ">
            Acceda a todo el material del Fondo Regional digitalizado, para usted
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4 mx-10">
          <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
            Romance
          </div>
          <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
            Romance
          </div>
          <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
            Romance
          </div>
          <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
            Romance
          </div>
        </div>
    
        <div className="flex justify-center my-10">
          <Button href={'#'} text={'Ver todo el material'}/>
        </div>
      </Container>
    </div>
  )
}