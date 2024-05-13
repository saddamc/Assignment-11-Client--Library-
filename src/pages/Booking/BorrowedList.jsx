

const BorrowedList = ({ borrow, borrowed, setBorrowed }) => {

    const { _id, image, customerName, book, email, author, rating, category, borrowDate, returnDate } = borrow;

    // const handleDelete = id => {
    //     const proceed = confirm('delete ok');
    //     if (proceed) {
    //         fetch(``)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //             })
    //     }
    // }

    return (
        <tr>
            <th>
                <button className="btn btn-sm bg-black text-white btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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