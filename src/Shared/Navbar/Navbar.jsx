import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"


const Navbar = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>Add Book</Link></li>
        <li><Link>All Books</Link></li>
        <li><Link>Borrowed Books</Link></li>
        <li><Link>Login</Link></li>

    </>
    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className=" rounded-md p-1 bg-red-600 w-[150px] ">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;