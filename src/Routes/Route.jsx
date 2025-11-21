import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Covarage/Covarage";
import About from "../pages/About/About";
import AuthLayout from "../layout/Auth/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Services/Services";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashbordLayout from "../layout/Dashboard/DashbordLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/services",
                Component: Services,
            },
            {
                path: "/covarage",
                Component: Covarage,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: "/pricing",
                Component: Pricing
            },
            {
                path: "/about-page",
                Component: About
            },
            {
                path: "/send-parcel",
                element: <PrivateRoute><SendParcel /></PrivateRoute>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: "/rider",
                element: <PrivateRoute><Rider /></PrivateRoute>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/forget-password",
                Component: ForgetPassword
            },
            {
                path: "/reset-password",
                Component: ResetPassword
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashbordLayout /></PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels
            },
            {
                path: 'payment/:id',
                Component: Payment
            }
        ]
    }
])
