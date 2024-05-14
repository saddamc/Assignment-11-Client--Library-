import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";



const MyBooks = () => {

    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/books/${user?.email}`
            )
            setBooks(data)
        }
        getData()
    }, [user])



    // const handleDelete = async id => {
    //     try {
    //         const { data } = await axios.delete(
    //             `${import.meta.env.VITE_API_URL}/book/${id}`
    //         )
    //         console.log(data)
    //         toast.success('Delete Successful')

    //         //refresh ui
    //         getData()
    //     } catch (err) {
    //         console.log(err.message)
    //         toast.error(err.message)
    //     }
    // }


    return (
        <div className="py-12 mx-auto max-w-7xl">
            <h2 className="text-5xl mx-auto text-center font-bold mb-12">My Books: <span className="text-green-700"> </span> </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200">
                            <th>BOOK IMAGE</th>
                            <th>BOOK NAME</th>
                            <th>AUTHOR</th>
                            <th>UPDATE BOOK</th>
                            <th>REMOVE BOOK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {books.length}

                        {/* {
                            borrowed.map(borrow => <BorrowedList key={borrow._id} borrow={borrow}
                                borrowed={borrowed}
                                setBorrowed={setBorrowed}
                            ></BorrowedList>)
                        } */}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBooks;