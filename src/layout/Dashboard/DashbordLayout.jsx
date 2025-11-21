import { Home, Package2, PanelRightClose } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import Logo from '../../components/Logo/Logo'

const DashbordLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState('menu')

    const handleDrawerToggle = () => {
        if (window.innerWidth >= 1024) {
            setIsCollapsed(prev => !prev);
        }
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* PAGE CONTENT */}
            <div className="drawer-content">
                <nav className="navbar w-full bg-base-100">
                    <label htmlFor="my-drawer-4" onClick={handleDrawerToggle} className="btn btn-square btn-ghost" >
                        <PanelRightClose className={`${isCollapsed ? "rotate-180" : ""}`} />
                    </label>
                </nav>

                <div className="m-2 md:m-5 p-5 md:p-10 rounded-2xl min-h-screen bg-base-100">
                    <Outlet />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className={`min-h-full bg-base-200 transition-all ${isCollapsed ? "w-14 items-center" : "w-64"}`}>
                    <ul className="menu w-full">
                        <div className="mb-3 is-drawer-close:border-b border-base-300">
                            {!isCollapsed ? <div className="flex justify-start py-2 px-4"><Logo /></div> : <Link to='/' className="flex justify-center items-center"><Home size={18} /></Link>}
                        </div>
                        <li>
                            <Link to="/dashboard/my-parcels" onClick={() => setMenu("my-parcel")} className={`${menu === "my-parcel" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                <h1 ><Package2 size={18} /></h1>
                                {!isCollapsed && <span>My Parcels</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout
