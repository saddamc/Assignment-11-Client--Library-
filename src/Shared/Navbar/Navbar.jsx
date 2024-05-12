import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('logout click')
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    }



    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allbooks">All Books</Link></li>
        {user?.email &&
            <>
                <li><Link to="/addbook">Add Book</Link></li>
                <li><Link to="/borrowedbooks">Borrowed Books</Link></li>
            </>
        }
    </>




    return (
        <div className="navbar h-28 mb-4 max-w-7xl mx-auto font-Roboto">
            <div className="navbar-start">
                <div className="dropdown z-10">
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


            {
                user ?
                    <div className="flex items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="" src={user.photoUrl} />
                            </div>
                        </div>
                        <button onClick={handleSignOut} className="login-button ml-2 p-2 rounded-md text-white font-bold bg-red-600 text-sm">Sign Out</button>
                    </div>
                    :
                    <Link to="/login">

                        <button className="login-button p-2 rounded-md text-white font-semibold bg-black text-sm hover:bg-red-500 hover:rounded-md">Login</button>
                    </Link>

            }
            {/* <button onClick={handleSignOut} className="login-button ml-2 p-2 rounded-md text-white font-bold bg-red-600 text-sm">Sign Out</button> */}





        </div>
    );
};

export default Navbar;