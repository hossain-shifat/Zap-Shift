import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to='/' className="flex justify-center items-center">
      <img src={assets.logo} className="w-20 sm:w-25 md:w-30" alt="" />
    </Link>
  )
}

export default Logo
