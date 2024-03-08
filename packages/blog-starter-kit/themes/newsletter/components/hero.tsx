import React from 'react'
import { useAppContext } from './contexts/appContext'

const Hero = () => {
    const {publication} = useAppContext()
    const {author} = publication
  return (
    <div className='min-h-[40vh] fade-in w-[90%] pt-10 mx-auto flex flex-col items-center justify-center gap-4'>
        <h1 className='text-5xl md:text-7xl text-center uppercase dark:text-white font-[600] flex flex-col gap-0'>{author.name} <span> newsletter</span></h1>
        <p className='text-xl text-center text-gray-700 dark:text-gray-400'>{publication.descriptionSEO ? publication.descriptionSEO : "Welcome to My Blog Space: Dive into a world of thoughts and ideas."}</p>
        
    </div>
  )
}

export default Hero