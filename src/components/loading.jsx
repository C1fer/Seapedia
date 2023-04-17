import React from 'react'
import * as Loader from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Loader.MutatingDots 
        height="100"
        width="100"
        color="#2a9df4"
        secondaryColor= '#2a9df4'
        radius='12.5' />
    </div>
  )
}



