import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Books from "../pages/Home/Books/Books";
import Borrowed from "../pages/Booking/Borrowed";
import BorrowBooks from "../pages/Booking/BorrowBooks";
import PrivateRoute from "./PrivateRoute";
import AddBook from "../pages/AddBook/AddBook";
import MyBooks from "../pages/MyBooks/MyBooks";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import UpdateBooks from "../pages/MyBooks/UpdateBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/book`),
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
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateBooks></UpdateBooks> </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
            },
            {
                path: '/borrowed/:id',
                element: <PrivateRoute><Borrowed></Borrowed></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
            },
            {
                path: '/borrowbooks',
                element: <PrivateRoute><BorrowBooks></BorrowBooks></PrivateRoute>,
            },
            {
                path: '/my-books',
                element: <PrivateRoute><MyBooks></MyBooks> </PrivateRoute>,
            },
        ]
    },
]);

export default router;