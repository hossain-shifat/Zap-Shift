import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Outlet } from 'react-router'
import AuthImage from '../../pages/Auth/AuthComponents/AuthImage'

const AuthLayout = () => {
    return (
        <div className="flex justify-between">
            <div className="flex-1">
                <div className="flex justify-start py-4 px-5 md:px-10">
                    <Logo />
                </div>
                <div className="max-w-full mx-auto">
                    <Outlet />
                </div>
            </div>
            <div className="flex-1">
                <AuthImage />
            </div>
        </div>
    )
}

export default AuthLayout
