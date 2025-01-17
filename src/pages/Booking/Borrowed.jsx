import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Borrowed = () => {
    const boo = useLoaderData();
    const { _id, image, author, book, rating, category, description, quantity } = boo;
    const { user } = useContext(AuthContext);

    const handleBorrowed = event => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName;
        const borrowDate = form.borrowDate.value;
        const returnDate = form.returnDate.value;
        const email = user?.email;
        const borrowed = {
            customerName: name,
            email,
            image,
            borrowDate,
            returnDate,
            book: book,
            book_id: _id,
            category: category,
            author: author,
            rating: rating,
            description: description,
            quantity: quantity,
        }
        console.log(borrowed);

        fetch(`${import.meta.env.VITE_API_URL}/borroweds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowed)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Book Borrowed Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="mx-auto max-w-7xl">

            {/* <div className="bg-[url('https://i.ibb.co/z4c38BH/booking.jpg')] bg-no-repeat w-[1200px] h-[170px] mx-auto ">

            </div> */}

            <div className="border m-8">
                <h2 className="text-5xl border-b text-orange-400 border-black p-4 justify-center text-center mt-4 bor font-bold">{book} </h2>
                <p> Quantity: {quantity} </p>
                <img className="justify-center items-center mx-auto  my-8 w-[250px] h-[250px] " src={image} alt="" />
                <div className="justify-center text-center font-bold space-y-2 mb-4 ">
                    <p> Author Name : {author} </p>
                    <p> Rating : {rating} </p>

                </div>
                <p className="max-w-[450px] mx-auto mb-6 ">{description} </p>

            </div>

            <form onSubmit={handleBorrowed} className="card-body mb-24 border m-8">
                <h2 className="justify-center rounded-md bg-red-300 py-2 text-center text-2xl text-white font-bold mt-8">Borrowed Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="date" name="borrowDate" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Return Date</span>
                        </label>
                        <input type="date" name="returnDate" className="input input-bordered" required />

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn text-white text-2xl bg-red-300 btn-block" type="submit" value="Add Borrowed" />
                </div>
            </form>
        </div>
    );
};

export default Borrowed;
