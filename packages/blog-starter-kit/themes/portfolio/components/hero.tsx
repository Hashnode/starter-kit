import React from 'react'
import { useAppContext } from './contexts/appContext'
import { Navbar } from './navbar'

const Hero = () => {
    const {publication} = useAppContext()
    const {author} = publication
  return (
    <div className='min-h-[20vh] animate-up w-[90%] mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-5xl text-center  dark:text-white font-bold'>Welcome👋🏼 to <span className='text-primary-700 dark:text-primary-200'>{author.name}'s</span> blog posts!</h1>
        <Navbar/>
    </div>
  )
}

export default Hero