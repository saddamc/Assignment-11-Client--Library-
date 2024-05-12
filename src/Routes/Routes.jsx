import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Books from "../pages/Home/Books/Books";
import Booking from "../pages/Booking/Booking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/books'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/allbooks',
                element: <Books></Books>,
            },
            {
                path: '/addbook',
                element: <Booking></Booking>,
            },
        ]
    },
]);

export default router;