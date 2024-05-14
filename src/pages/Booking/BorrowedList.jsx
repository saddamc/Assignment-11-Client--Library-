import { GiReturnArrow } from "react-icons/gi";
import Swal from "sweetalert2";


const BorrowedList = ({ borrow, borrowed, setBorrowed }) => {

    const { _id, image, customerName, book, email, author, rating, category, borrowDate, returnDate } = borrow;

    const handleDelete = _id => {
        console.log(_id);
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

                fetch(`http://localhost:5000/borroweds/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleleCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
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
            <td>{borrowDate}</td>
            <td>{returnDate}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn bg-lime-300 text-red-500 text-lg font-bold "> <GiReturnArrow /> </button>
            </th>
        </tr>
    );
};

export default BorrowedList;