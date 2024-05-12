import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BorrowedList from "./BorrowedList";


const BorrowBooks = () => {

    const { user } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);

    const url = `http://localhost:5000/borroweds?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowed(data))
    }, [])



    return (
        <div className="py-12">
            <h2 className="text-5xl mx-auto text-center font-bold mb-12">Borrowed List: <span className="text-green-700">{borrowed.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Name</th>
                            <th>Book</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th>Status</th>
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
