import React from 'react'
import { assets } from '../../../assets/assets'

const AuthImage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center w-full bg-[#FAFDF0]">
            <img src={assets.authImage} alt="" />
        </div>
    )
}

export default AuthImage
