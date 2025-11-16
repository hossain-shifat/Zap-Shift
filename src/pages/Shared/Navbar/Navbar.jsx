import React from 'react'
import Logo from '../../../components/Logo/Logo'
import { NavLink } from 'react-router'

const Navbar = () => {

    const list =
    <>
        <NavLink to='/services'><li>Services</li></NavLink>
        <NavLink to='/covarage'><li>Covarage</li></NavLink>
        <NavLink to='/about-page'><li>About Page</li></NavLink>
        <NavLink to='/pricing'><li>Pricing</li></NavLink>
        <NavLink to='/be-raider'><li>Be a Raider</li></NavLink>
    </>

  return (
      <div className="navbar bg-base-200 shadow-sm md:px-10 rounded-2xl">
          <div className="navbar-start">
              <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  {/* mobile scteen */}
                  <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {list}
                  </ul>
              </div>
              <Logo/>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* large screen */}
              <ul className="menu menu-horizontal px-1 gap-4 *:text-gray-200">
                {list}
              </ul>
          </div>
          <div className="navbar-end flex gap-2">
              <button className="btn btn-outline hover:bg-transparent rounded-lg">Sign In</button>
              <button className="btn btn-primary rounded-lg text-black">Be a Raider</button>
          </div>
      </div>
  )
}

export default Navbar
