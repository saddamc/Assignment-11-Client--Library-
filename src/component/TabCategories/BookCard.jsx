import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const BookCard = ({ bo }) => {
    const { _id, image, author, book, rating, category } = bo || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-[180px] h-[220px] " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title ">{book}</h2>
                <p className="text-lg text-orange-500 font-bold">Rating: {rating}.00 </p>
                <div className='flex justify-between'>
                    <p className='text-sm font-bold'>Category: {category} </p>
                    <p className='text-sm font-bold'>Author: {author} </p>
                </div>
                <div className="card-actions">
                    <Link to={`/borrowed/${_id}`}><button className="btn-sm bg-[rgb(245,57,120)] text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
BookCard.propTypes = {
    bo: PropTypes.func
}