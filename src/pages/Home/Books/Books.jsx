import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Books.css";



const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(data => {
                setBooks(data.data);
            })
    }, [])


    return (
        <div className="my-12 mx-auto max-w-7xl items-center justify-center">
            <div className="text-center mb-12 space-y-4 w-[650px] mx-auto ">
                <h2 className="text-4xl text-orange-600 font-bold ">Books</h2>
                <p >Our library boasts an extensive array of captivating books, encompassing diverse genres, cultures, and interests. From classic literature to contemporary works, our collection enriches minds, fosters a love for reading, and promotes lifelong learning among patrons of all ages and backgrounds.</p>
            </div>
            <div className="grid-container">
                {
                    books.map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)
                }

            </div>
        </div>
    );
};

export default Books;