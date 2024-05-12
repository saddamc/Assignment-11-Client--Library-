import { Link } from 'react-router-dom';

const Book = ({ boo }) => {

    const { _id, image, author, rating, category, book } = boo;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-[180px] h-[220px] " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title ">{book}</h2>
                <p className="text-lg text-orange-500 font-bold">Rating: {rating}.00 </p>
                <p className='text-sm font-bold'>Category: {category} </p>
                <div className="card-actions">
                    <Link to={`/borrowed/${_id}`}><button className="btn-sm bg-[rgb(245,57,120)] text-white">Borrow Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Book;