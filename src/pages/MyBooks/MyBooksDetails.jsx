import { FcDeleteDatabase } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const MyBooksDetails = ({ borrow, books, setBooks }) => {
    const { _id, image, author, rating, category, book, description } = borrow;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/books/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deleleCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your book deleted Successfully.",
                                icon: "success"
                            });
                            const remaining = books.filter(cof => cof._id !== _id);
                            setBooks(remaining);
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
                            image && <img src={image} alt="image uploading" />
                        }
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold text-lg">{book}</p>
            </td>
            <td>{author}</td>
            <th>
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
            </th>
            <td className=''>
                <Link to={`/update/${_id}`}>
                    <button className="btn bg-lime-500 w-[75px] text-red-500 text-2xl font-bold "><GrUpdate /> </button>
                </Link>

            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn text- w-[75px]  text-5xl bg-yellow-100 font-bold "><FcDeleteDatabase /> </button>
            </th>
        </tr>
    );
};

export default MyBooksDetails;
MyBooksDetails.propTypes = {
    borrow: PropTypes.func
}