import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Pages/shared/Navbar/Navbar'
import Footer from '../Pages/shared/Footer/Footer'

const MainLayout = () => {
    return (
        <div >
            {/* <Navbar /> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout