import React from 'react'
import { NavLink } from 'react-router'
import Logo from '../Logo/Logo'

const Navbar = () => {

    const navItems = <>
        <li><NavLink to="/"> Work </NavLink></li>
        <li><NavLink to="/about"> About </NavLink></li>
        <li><NavLink to="/blog"> Blog </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li>

    </>

    return (
        <div className="navbar flex justify-between gap-2 bg-[#0A0A0A]/10 text-white border border-[#FFFFFF]/10 rounded-full p-6  shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </button>
            </div>

        </div>
    )
}

export default Navbar