import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import MyBooksDetails from "./MyBooksDetails";



const MyBooks = () => {

    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/books?email=${user?.email}`;

    useEffect(() => {

        axios.get(url)
            .then(res => {
                setBooks(res.data);
            })
    }, [])





    return (
        <div className="py-12 mx-auto max-w-7xl font-Fira">
            <h2 className="text-5xl mx-auto text-center font-bold mb-12  text-yellow-600">My Books: {books.length} <span className="text-green-700"> </span> </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200 ml-12">
                            <th>BOOK IMAGE</th>
                            <th>BOOK NAME</th>
                            <th>AUTHOR</th>
                            <th>CATEGORY</th>
                            <th>UPDATE BOOK </th>
                            <th>REMOVE BOOK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            books.map(borrow => <MyBooksDetails key={borrow._id} borrow={borrow}
                                books={books}
                                setBooks={setBooks}
                            ></MyBooksDetails>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBooks;