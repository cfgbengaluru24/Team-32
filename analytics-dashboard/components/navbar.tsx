'use client'
import React, { useEffect, useRef } from 'react'
import ThemeToggle from './theme-toggle';

const NavBar = () => {
    return (
        <div className="navbar bg-white dark:bg-black flex items-center justify-center">
            <div className='navbar rounded-3xl w-3/4 border dark:border-white mt-4'>
                <div className="flex-1">
                    <button className="btn btn-ghost text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#77E4C8] dark:to-[#4535C1] dark:from-[#77E4C8]">ROHINI</button>
                </div>
                <div className="flex-none gap-2">
                    <ThemeToggle />
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white text-black dark:bg-black dark:text-white" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full mr-4">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NavBar;