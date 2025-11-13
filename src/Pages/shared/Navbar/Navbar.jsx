import { Link, NavLink } from 'react-router'
import Logo from '../Logo/Logo'

const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/work" className="hover:text-blue-400 transition-colors">Work</NavLink></li>
        <li><NavLink to="/about" className="hover:text-blue-400 transition-colors">About</NavLink></li>
        <li><NavLink to="/blog" className="hover:text-blue-400 transition-colors">Blog</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-blue-400 transition-colors">Contact</NavLink></li>
    </>

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between bg-black/30 backdrop-blur-sm text-white border border-white/10 rounded-full px-4 md:px-6 py-3 md:py-4 shadow-lg">
                {/* Left side - Logo and Mobile Menu */}
                <div className="flex items-center gap-2">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-md border border-white/10 rounded-box z-1 mt-3 w-52 p-2 shadow-xl">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'> <Logo /></Link>
                </div>

                {/* Right side - Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                    <button className="btn btn-square btn-ghost btn-sm hover:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;