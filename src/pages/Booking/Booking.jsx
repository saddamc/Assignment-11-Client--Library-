import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Booking = () => {
    const book = useLoaderData();
    const { _id, image, name, author, rating, category } = book;
    const { user } = useContext(AuthContext);

    const handleBookingBook = event => {
        event.prevantDefault();

        const form = event.target;
        const name = form.name.value;
        const bookingDate = form.bookingDate.value;
        const returnDate = form.returnDate.value;
        const email = user?.email;
        const booking = {
            name,
            email,
            image,
            bookingDate,
            returnDate,
            book: name,
            book_id: _id,
            category: category,
            author: author,
            rating: rating
        }
        console.log(booking);

    }

    return (
        <div className="mx-auto max-w-7xl">

            {/* <div className="bg-[url('https://i.ibb.co/z4c38BH/booking.jpg')] bg-no-repeat w-[1200px] h-[170px] mx-auto ">

            </div> */}
            <h2 className="justify-center rounded-md bg-red-300 py-4 text-center text-3xl text-white font-bold mt-8">Booking Your Book</h2>
            <h2 className="text-5xl border-b text-orange-400 border-black p-4 justify-center text-center mt-4 bor font-bold">{name} </h2>
            <img className="justify-center items-center mx-auto  my-8 w-[250px] h-[250px] " src={image} alt="" />

            <form onSubmit={handleBookingBook} className="card-body mb-24 border">
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
                        <input type="date" name="bookingDate" className="input input-bordered" required />

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
                    <input className="btn text-white text-2xl bg-red-300 btn-block" type="submit" value="Add Booking" />
                </div>
            </form>
        </div>
    );
};

export default Booking;
