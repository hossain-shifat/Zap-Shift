import { Home, Package2, PanelRightClose } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import Logo from '../../components/Logo/Logo'

const DashbordLayout = () => {
    const [menu,setMenu] = useState('menu')
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-200">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <PanelRightClose />
                    </label>
                </nav>
                <div className="p-5 min-h-screen">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <div className="is-drawer-close:hidden">
                            <div className="border-b mb-1 pb-1 border-base-200">
                                <span className="flex justify-start items-center w-25 px-2 py-3">
                                    <Logo />
                                </span>
                            </div>
                            <div>
                                <h1 className="font-bold py-1">Menu</h1>
                            </div>
                        </div>
                        <li>
                            <Link to='/dashboard/my-parcels' onClick={() => setMenu("my-parcels")} className={menu === "my-parcels" ? "activeDashMenu" : ""}>
                            <Package2 size={18}/>
                                <span className="is-drawer-close:hidden">My Parcels</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashbordLayout
