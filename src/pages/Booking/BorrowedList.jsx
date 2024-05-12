

const BorrowedList = ({ borrow, borrowed, setBorrowed }) => {

    const { _id, image, customerName, book, email, author, rating, category, borrowDate, returnDate } = borrow;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-8 h-8 my-4">
                        {
                            image && <img src={image} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>


            </td>
            <td>
                {book}
            </td>
            <td>{borrowDate}</td>
            <td>{returnDate}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BorrowedList;