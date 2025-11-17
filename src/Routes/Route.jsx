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
                path: "/covarage",
                Component: Covarage,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: "/about-page",
                Component: About
            },
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
    }
])
