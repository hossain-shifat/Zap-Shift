import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Outlet } from 'react-router'
import AuthImage from '../../pages/Auth/AuthComponents/AuthImage'

const AuthLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-base-100">
            <div className="flex flex-col min-h-screen">
                {/* Logo*/}
                <div className="flex items-start py-4 px-10">
                    <Logo />
                </div>
                <div className="flex items-center justify-center px-5 min-h-screen">
                    <Outlet />
                </div>
            </div>
            <div className="hidden md:block">
                <AuthImage />
            </div>
        </div>
    )
}

export default AuthLayout
