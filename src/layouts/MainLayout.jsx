import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/shared/Footer/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#1E1E1E]">
            {/* Main Content */}
            <main className="grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout