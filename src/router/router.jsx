import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Work from "../Pages/work/Work";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "work",
                Component: Work
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "blog",
                Component: Blog
            },
            {
                path: "contact",
                Component: Contact
            },
        ]
    }
])