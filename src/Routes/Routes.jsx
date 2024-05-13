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
import MyBids from "../pages/MyBids/MyBids";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/books'),
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
                path: '/borrowed/:id',
                element: <PrivateRoute><Borrowed></Borrowed></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`),
            },
            {
                path: '/borrowbooks',
                element: <PrivateRoute><BorrowBooks></BorrowBooks></PrivateRoute>,
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids></MyBids> </PrivateRoute>,
            },
        ]
    },
]);

export default router;