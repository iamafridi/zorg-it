import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Pages/shared/Navbar/Navbar'
import Footer from '../Pages/shared/Footer/Footer'

const MainLayout = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-6">
                <Navbar />
            </div>

            <Outlet className='max-w-6xl mx-auto' />
            <Footer />
        </div>
    )
}

export default MainLayout