import { FcDeleteDatabase } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';

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

                fetch(`http://localhost:5000/books/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleleCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
                            image && <img src={image} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold text-lg">{book}</p>
            </td>
            <td>{author}</td>
            <th className='flex gap-4'>
                <button className="btn bg-lime-500 w-[75px] text-red-500 text-2xl font-bold "><GrUpdate /> </button>
                <button onClick={() => handleDelete(_id)} className="btn text- w-[75px]  text-5xl bg-yellow-100 font-bold "><FcDeleteDatabase /> </button>
            </th>
        </tr>
    );
};

export default MyBooksDetails;