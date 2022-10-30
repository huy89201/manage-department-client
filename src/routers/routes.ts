import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

//lazy import 
const LoginPage = lazy(() => import('pages/login')) as any
const HomePage = lazy(() => import('pages/home')) as any

export const PRIVATE_ROUTES = [
    {
        path: "/admin",
        Component: HomePage
    }
]

export const PUBLIC_ROUTES = [
    {
        path: "/login",
        Component: LoginPage
    },
]
