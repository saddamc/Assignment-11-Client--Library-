import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBooks = () => {
    const { user } = useContext(AuthContext);
    const books = useLoaderData();
    // console.log(books);
    const { _id, image, author, rating, category, book, description } = books;
    const navigate = useNavigate();


    const handleUpdateBook = event => {
        event.preventDefault();

        const form = event.target;
        const book = form.book.value;
        const image = form.image.value;
        const email = user?.email;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const bookData = {
            book,
            image,
            email,
            author,
            category,
            rating,
            description,
        }
        console.log(bookData);

        // send data to the server
        fetch(`${import.meta.env.VITE_API_URL}/books/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Product Updated Successfully !",
                        icon: "success"
                    });
                }
                navigate('/my-books')

            })
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-3xl text-center mb-12 border-b pb-4 font-semibold text-gray-700 capitalize '>
                    Update Book
                </h2>

                <form onSubmit={handleUpdateBook}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='book'>
                                Book Name
                            </label>
                            <input
                                id='book'
                                name='book'
                                placeholder="Book Name"
                                type='text'
                                defaultValue={book}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='image'>
                                Book Photo
                            </label>
                            <input
                                id='image'
                                name='image'
                                placeholder="Photo url"
                                type='text'
                                defaultValue={image}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='author_email'>
                                Email Address
                            </label>
                            <input
                                defaultValue={user?.email}
                                id='emailAddress'
                                type='email'
                                name='author_email'
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='author'>
                                Author Name
                            </label>
                            <input
                                id='author'
                                name='author'
                                placeholder="Author Name"
                                type='text'
                                defaultValue={author}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-orange-400 font-bold' htmlFor='category'>
                                Book Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                defaultValue={category}
                                className='border p-2 rounded-md'
                            >
                                <option value='Sci-Fi'>Sci-Fi</option>
                                <option value='Drama'>Drama</option>
                                <option value='History'>History</option>
                                <option value='Thriller'>Thriller</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Rating
                            </label>
                            <input
                                id='rating'
                                name='rating'
                                placeholder="rating 1-5"
                                type='number'
                                defaultValue={rating}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            required
                            id='description'
                            defaultValue={description}
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Update
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateBooks;