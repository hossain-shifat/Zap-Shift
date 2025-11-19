import React from 'react'
import Logo from '../../../components/Logo/Logo'
import { Link, NavLink } from 'react-router'
import { ArrowUpRight, Menu } from 'lucide-react'
import useAuth from '../../../hooks/useAuth'

const Navbar = () => {

    const { user, logOut } = useAuth()

    const list =
        <>
            <NavLink to='/services'><li>Services</li></NavLink>
            <NavLink to='/covarage'><li>Covarage</li></NavLink>
            <NavLink to='/about-page'><li>About Us</li></NavLink>
            <NavLink to='/pricing'><li>Pricing</li></NavLink>
            <NavLink to='/send-parcel'><li>Send Parcel</li></NavLink>
            <NavLink to='/rider'><li>Be a Rider</li></NavLink>
        </>

        const handleLogOut =()=>{
            logOut()
        }

    return (
        <div className="navbar bg-base-200 shadow-sm md:px-10 rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu />
                    </div>
                    {/* mobile scteen */}
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* large screen */}
                <ul className="menu menu-horizontal px-1 *:text-gray-200 *:py-2 *:px-4">
                    {list}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                {
                    user
                        ?
                        <button onClick={handleLogOut} className="btn btn-outline btn-error hover:text-error hover:bg-transparent rounded-lg">Logout</button>
                        :
                        <Link to='/login' className="btn btn-outline hover:bg-transparent rounded-lg">Sign In</Link>
                }
                <Link to='/rider' className="btn btn-primary rounded-lg text-black">Be a Raider</Link>
                <h1 className="hidden md:block p-2 rounded-full bg-[#0B0B0B] text-primary -ml-2"><ArrowUpRight /></h1>
            </div>
        </div>
    )
}

export default Navbar
