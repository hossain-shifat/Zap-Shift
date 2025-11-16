import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer/Footer'
import Navbar from '../pages/Shared/Navbar/Navbar'

const Root = () => {
    return (
        <div className="p-2 md:p-5">
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
