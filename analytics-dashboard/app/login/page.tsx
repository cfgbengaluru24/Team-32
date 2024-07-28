'use client'
import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/theme-toggle';

const LogIN = () => {
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
        router.push('/dashboard');
    }

    return (
        <>
            <div className='flex justify-center bg-white dark:bg-black'>
                <div className="navbar bg-white dark:bg-black w-1/2 flex justify-between mx-6 rounded-3xl mt-4 z-10 border dark:border-white">
                    <button className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#77E4C8] dark:to-[#4535C1] dark:from-[#77E4C8]">ROHINI</button>
                    <ThemeToggle />
                </div>
            </div>
            <div className="h-screen w-full rounded-md bg-white dark:bg-black relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-600 dark:to-neutral-200 dark:from-neutral-600 text-center font-sans font-bold">
                    India's Largest Foundation for Oral Healthcare. Promoting The Concept Of "Zero Cavities In The State Of Telangana"
                    </h1>
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="  Enter your email"
                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                    />
                    <input
                        type="text"
                        placeholder="  Enter your Password"
                        className="rounded-md h-10 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-white dark:bg-black placeholder:text-neutral-700 text-black dark:text-white"
                    />
                </div>
                <div className="button flex justify-center lg:justify-start my-8">
                    <button className="btn btn-wide relative z-10 text-white gradient-button" onClick={handleClick}>Log In</button>
                </div>
            </div>
        </>
    )
}

export default LogIN
