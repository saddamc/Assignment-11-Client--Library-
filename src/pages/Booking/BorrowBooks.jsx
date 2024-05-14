import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedList from "./BorrowedList";
import axios from "axios";


const BorrowBooks = () => {

    const { user } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/borroweds?email=${user?.email}`;

    useEffect(() => {

        axios.get(url)
            .then(res => {
                setBorrowed(res.data);
            })
    }, [])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBorrowed(data))
    // }, [])



    return (
        <div className="py-12 mx-auto max-w-7xl">
            <h2 className="text-5xl mx-auto text-center font-bold mb-12">Borrowed Books: <span className="text-green-700">{borrowed.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200">
                            <th>IMAGE</th>
                            <th>BOOK NAME</th>
                            <th>CATEGORY</th>
                            <th>BORROWED DATE</th>
                            <th>RETURN DATE</th>
                            <th>RETURN</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            borrowed.map(borrow => <BorrowedList key={borrow._id} borrow={borrow}
                                borrowed={borrowed}
                                setBorrowed={setBorrowed}
                            ></BorrowedList>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BorrowBooks;
