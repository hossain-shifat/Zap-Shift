import React from 'react'
import { assets } from '../../assets/assets'

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={assets.logo} className="h-7 md:h-10" alt="" />
      <h1 className="font-bold text-lg md:text-3xl pt-3 md:pt-5 -ml-2">ZapShift</h1>
    </div>
  )
}

export default Logo
