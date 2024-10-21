import { ReactNode } from "react";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import AboutPage from "../pages/about/AboutPage";
import ProjectPage from "../pages/projects/ProjectPage";
import LoginPage from "../pages/login/LoginPage";
import DetailBoard from "../pages/detailBoard/DetailBoard";
import RegisterPage from "../pages/register/RegisterPage";
import ProfilePage from "../pages/profile/ProfilePage";

export interface IRouteMaps {
    __id: string;
    name: string;
    URL: string;
    element:() => JSX.Element;
    isProtected?: boolean;
}


export const routeMap:IRouteMaps[] = [
    {
        __id: '1',
        name: 'Home',
        URL: '/',
        element: HomePage
    },
    {
        __id: '2',
        name: 'Contact',
        URL: '/contact',
        element: ContactPage
    },
    {
        __id: '3',
        name: 'About',
        URL: '/about',
        element: AboutPage
    },
    {
        __id: '4',
        name: 'Projects',
        URL: '/projects',
        element: ProjectPage
    },
    {
        __id: '5',
        name: 'Login',
        URL: '/login',
        element: LoginPage
    },
    {
        __id: '6',
        name: 'Register',
        URL: '/register',
        element: RegisterPage
    },
    {
        __id: '7',
    name: 'Detailboard',
    URL: '/detailboard',
    element: DetailBoard,
    isProtected: true,
    },
    {
        __id: '8',
    name: 'Profile',
    URL: '/profile',
    element: ProfilePage,
    isProtected: true,
    }
]