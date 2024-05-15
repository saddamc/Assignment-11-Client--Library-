import { GiReturnArrow } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const BorrowedList = ({ borrow, borrowed, setBorrowed }) => {

    const { _id, image, customerName, book, email, author, rating, category, borrowDate, returnDate } = borrow;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to return this book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/borroweds/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleleCount > 0) {
                            Swal.fire({
                                title: "RETURN!",
                                text: "Your Book return Successfully.",
                                icon: "success"
                            });
                            const remaining = borrowed.filter(cof => cof._id !== _id);
                            setBorrowed(remaining);
                        }
                    })
            }
        });

    }




    return (
        <tr>
            <td>

                <div className="avatar">
                    <div className="rounded w-12 h-12 my-4">
                        {
                            image && <img src={image} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold text-lg">{book}</p>
            </td>
            <td>
                <p
                    className={`px-3 py-3 ${category === 'Sci-Fi' &&
                        'text-blue-500 bg-blue-100/60'
                        } ${category === 'Drama' &&
                        'text-emerald-500 bg-emerald-100/60'
                        } ${category === 'History' &&
                        'text-pink-500 bg-pink-100/60'
                        } ${category === 'Thriller' &&
                        'text-purple-900 bg-cyan-100/60'
                        } text-xs  rounded-full text-center`}
                >
                    {category}
                </p>
            </td>
            <td>{borrowDate}</td>
            <td>{returnDate}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn bg-lime-300 text-red-500 text-lg font-bold "> <GiReturnArrow /> </button>
            </th>
            <th>

                <button className="btn bg-lime-500 w-[75px] text-red-500 text-2xl font-bold "><GrUpdate /> </button>


            </th>
        </tr>
    );
};

export default BorrowedList;
BorrowedList.propTypes = {
    borrow: PropTypes.func
}