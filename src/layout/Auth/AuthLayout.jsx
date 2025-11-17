import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Outlet } from 'react-router'
import AuthImage from '../../pages/Auth/AuthComponents/AuthImage'

const AuthLayout = () => {
    return (
        <div className="overflow-y-hidden bg-white">
            {/* for mobile screen */}
            <div className="h-screen md:hidden">
                <div>
                    <div className="flex justify-start py-2 px-10">
                        <Logo />
                    </div>
                    <div className="p-5 h-screen justify-center items-center">
                        <Outlet/>
                    </div>
                </div>
            </div>
            {/* for large screen device */}
            <div className="hidden md:grid grid-cols-2 h-screen">
                <div className="">
                    <div className="flex justify-start py-2 px-10">
                        <Logo />
                    </div>
                    <div className="p-5 h-screen justify-center items-center">
                        <Outlet />
                    </div>
                </div>
                <div className="h-full">
                    <AuthImage />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
