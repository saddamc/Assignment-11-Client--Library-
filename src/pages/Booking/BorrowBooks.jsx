import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const BorrowBooks = () => {

    const { user } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);

    const url = `http://localhost:5000/borroweds?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])



    return (
        <div>
            <h2>Hi</h2>
        </div>
    );
};

export default BorrowBooks;
