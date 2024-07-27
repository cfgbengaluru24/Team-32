'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import lottie from 'lottie-web';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/theme-toggle';

const Hero = () => {
  const router = useRouter();
  const animationContainer = useRef<any>(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'preventive.json'
    });
    return () => animationInstance.destroy();
  }, []);

  function handleClick() {
    router.push('/login');
  }

  return (
    <>
      <div className='flex justify-center bg-white dark:bg-black'>
        <div className="navbar bg-white dark:bg-black w-1/2 flex justify-between mx-6 rounded-3xl mt-4 z-10 border dark:border-white">
          <button className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#77E4C8] dark:to-[#4535C1] dark:from-[#77E4C8]">ROHINI</button>
          <ThemeToggle />
        </div>
      </div>
      <motion.div
        className="main_container overflow-hidden h-screen w-full lg:pl-48 lg:mt-0 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="content order-2 lg:order-1 text-center lg:text-left mt-12 text-gray-900 dark:text-white lg:w-1/2 flex flex-col">
          <span className="text-6xl md:text-9xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#77E4C8] dark:to-[#4535C1] dark:from-[#77E4C8]"> Rohini</span>
          <span className="text-2xl md:text-6xl font-bold">Oral Health </span>
          <span className="text-xl md:text-5xl sm:text-xl font-bold">Foundation</span>
          <br />
          <div className="button flex justify-center lg:justify-start my-8">
            <button className="btn btn-wide text-white gradient-button dark:text-[#77E4C8]" onClick={handleClick}>Log In</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:pl-24 -mt-4 lg:order-1 flex justify-center items-center w-full h-full">
          <div className="relative flex h-3/4 w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <div ref={animationContainer} className='w-full h-full'></div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Hero
