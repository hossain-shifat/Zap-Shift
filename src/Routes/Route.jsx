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
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel/PaymentCancel";
import PaymentHIstory from "../pages/Dashboard/Payment/PaymentHIstory/PaymentHIstory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import VerificationCode from "../pages/Auth/VerificationCode/VerificationCode";
import UserManagement from "../pages/Dashboard/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";
import RiderRoutes from "./RiderRoutes";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import TrackParcel from "../pages/TrackParcel/TrackParcel";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome/DashboardHome";


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
                path: "/track-parcel/:trackingId",
                Component: TrackParcel
            },
            {
                path: "/send-parcel",
                element: <PrivateRoute><SendParcel /></PrivateRoute>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: "/rider",
                element: <PrivateRoute><Rider /></PrivateRoute>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
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
            {
                path: "/verify",
                Component: VerificationCode
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashbordLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: 'my-parcels',
                Component: MyParcels
            },
            {
                path: 'payment/:id',
                Component: Payment
            },
            {
                path: 'payment-history',
                Component: PaymentHIstory
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancel',
                Component: PaymentCancel
            },

            // rider only riders
            {
                path: 'assigned-delivery',
                element: <RiderRoutes><AssignDeliveries /></RiderRoutes>
            },
            {
                path: 'completed-delivery',
                element: <RiderRoutes><CompletedDeliveries /></RiderRoutes>
            },

            // admin related route
            {
                path: 'approve-riders',
                element: <AdminRoute><ApproveRiders /></AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute><AssignRiders /></AdminRoute>
            },
            {
                path: 'user-management',
                element: <AdminRoute><UserManagement /></AdminRoute>
            },
        ]
    }
])
