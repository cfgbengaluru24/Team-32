'use client'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navbar';
import TypingAnimation from '@/components/typing-animation';

const Hero = () => {
  const router = useRouter();
  const animationContainer = useRef<any>(null);

  return (
    <>
      <NavBar />
      <div className='bg-white dark:bg-black mx-auto p-10 '>
        <TypingAnimation
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#77E4C8] dark:to-[#4535C1] dark:from-[#77E4C8]"
          text="Dentistry is explensive, but neglect is not"
        />
      </div>
    </>
  )
}

export default Hero
