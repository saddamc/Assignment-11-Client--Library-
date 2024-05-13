import { GiReturnArrow } from "react-icons/gi";


const BorrowedList = ({ borrow, borrowed, setBorrowed }) => {

    const { _id, image, customerName, book, email, author, rating, category, borrowDate, returnDate } = borrow;



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
                <button className="btn bg-lime-300 text-red-500 text-lg font-bold "> <GiReturnArrow /> </button>
            </th>
        </tr>
    );
};

export default BorrowedList;