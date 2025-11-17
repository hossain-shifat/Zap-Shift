import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../pages/Shared/Navbar/Navbar'
import Footer from '../../pages/Shared/Footer/Footer'


const Root = () => {
    return (
        <div className="p-2 md:p-5">
            <Navbar />
            <div className="min-h-screen my-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
