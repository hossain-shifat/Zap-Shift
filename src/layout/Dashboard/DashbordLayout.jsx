import { Bike, CircleCheckBig, CircleDollarSign, Home, ListCheck, ListChecks, Motorbike, Package2, PanelRightClose, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router'
import Logo from '../../components/Logo/Logo'
import useRole from '../../hooks/useRole';
import useAuth from '../../hooks/useAuth';

const DashbordLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState('menu')

    const { user } = useAuth()

    const handleDrawerToggle = () => {
        if (window.innerWidth >= 1024) {
            setIsCollapsed(prev => !prev);
        }
    };

    const { role } = useRole()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* PAGE CONTENT */}
            <div className="drawer-content">
                <nav className="navbar w-full bg-base-100 flex justify-between">
                    <label htmlFor="my-drawer-4" onClick={handleDrawerToggle} className="btn btn-square btn-ghost" >
                        <PanelRightClose className={`${isCollapsed ? "rotate-180" : ""}`} />
                    </label>
                    <nav className="navbar-end flex gap-4 max-w-full pr-5">
                        <div>
                            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                        </div>
                        <div className="leading-5">
                            <h1>{user.displayName}</h1>
                            <p>{role}</p>
                        </div>
                    </nav>
                </nav>

                <div className="m-3 md:m-5 p-5 md:p-10 rounded-2xl min-h-screen bg-base-100">
                    <Outlet />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className={`min-h-full bg-base-200 transition-all ${isCollapsed ? "w-14 items-center" : "w-64"}`}>
                    <ul className="menu w-full *:text-base-content">
                        <div className="mb-3 is-drawer-close:border-b border-base-300">
                            {!isCollapsed ? <div className="flex justify-start py-2 px-4"><Logo /></div> : <Link to='/' className="flex justify-center items-center"><Home size={18} /></Link>}
                        </div>
                        <li>
                            <Link to="/dashboard/my-parcels" onClick={() => setMenu("my-parcel")} className={`${menu === "my-parcel" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                <h1 ><Package2 size={18} /></h1>
                                {!isCollapsed && <span>My Parcels</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/payment-history" onClick={() => setMenu("payment-history")} className={`${menu === "payment-history" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                <h1><CircleDollarSign size={18} /></h1>
                                {!isCollapsed && <span>Payment Histroy</span>}
                            </Link>

                            {/* admin only */}
                        </li>
                        {
                            role === 'admin' &&
                            <>
                                <li>
                                    <Link to="/dashboard/approve-riders" onClick={() => setMenu("approve-riders")} className={`${menu === "approve-riders" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                        <h1><Motorbike size={18} /></h1>
                                        {!isCollapsed && <span>Approve Riders</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/assign-riders" onClick={() => setMenu("assign-riders")} className={`${menu === "assign-riders" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                        <h1><Bike size={18} /></h1>
                                        {!isCollapsed && <span>Assign Riders</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/user-management" onClick={() => setMenu("user-management")} className={`${menu === "user-management" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                        <h1><Users size={18} /></h1>
                                        {!isCollapsed && <span>User Management</span>}
                                    </Link>
                                </li>
                            </>
                        }

                        {/* rider */}
                        {
                            role === 'rider' &&
                            <>
                                <li>
                                    <Link to="/dashboard/assigned-delivery" onClick={() => setMenu("assigned-delivery")} className={`${menu === "assigned-delivery" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                        <h1><ListChecks size={18} /></h1>
                                        {!isCollapsed && <span>Assigned Delivery</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/completed-delivery" onClick={() => setMenu("completed-delivery")} className={`${menu === "completed-delivery" ? "activeDashMenu" : ""} ${isCollapsed ? 'flex justify-center items-center' : ''}`}>
                                        <h1><CircleCheckBig size={18} /></h1>
                                        {!isCollapsed && <span>Completed Delivery</span>}
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout
