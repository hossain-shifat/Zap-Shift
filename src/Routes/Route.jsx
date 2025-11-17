import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Covarage/Covarage";
import About from "../pages/About/About";


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
    }
])
