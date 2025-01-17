import { useContext, useEffect, useState } from "react";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createUser, user, loading } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    const handleRegister = async event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log({ name, photo, email, password });



        setRegisterError('');
        setSuccess('');

        // password conditions
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Password must be at least 6 characters !</a>'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Uppercase Letter !</a>'
            }); ('Must have an ');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Lowercase Letter !</a>'
            });
            return;
        }
        else if (!/[0-9]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Missing Numeric key !</a>'
            });
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: "User Register Successfully !",
                    icon: "success"
                });

            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: (error.message.slice(9))
                });
            })
    }

    if (user || loading) return;

    return (
        <div className="bg-[url('https://i.ibb.co/Xkw31hT/login.jpg')] bg-no-repeat h-[1300px]  mx-auto max-w-[1500px] text-center">


            <div>
                <p className="text-left text-[#C4AC8C] ">.</p>
                <div className="card shrink-0  mx-auto w-[440px] mt-[330px] shadow-2xl shadow-black bg-[#113B54] text-white">
                    <div>
                        <h1 className="text-3xl flex items-center text-center justify-center gap-4 font-bold pt-8 border-b-1 mb-4 ">
                            <span className="text-6xl ">
                                <PiUserCirclePlusFill />
                            </span> REGISTER</h1>
                    </div>
                    <hr></hr>
                    <form onSubmit={handleRegister} className="card-body mx-auto">
                        <div className="form-control w-[350px]">
                            <label className="label">
                                <span className="label-text text-[#31aaf0] ">NAME</span>
                            </label>
                            <input
                                type="text"
                                name="name"

                                placeholder="name"
                                className="input input-bordered text-black" required />
                        </div>
                        {/* photo url */}
                        <div className="form-control w-[350px]">
                            <label className="label">
                                <span className="label-text text-[#31aaf0] ">PHOTO URL</span>
                            </label>
                            <input
                                type="photo"
                                name="photo"
                                placeholder="url"
                                className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control w-[350px]">
                            <label className="label">
                                <span className="label-text text-[#31aaf0] ">USER EMAIL</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control w-[350px]">
                            <label className="label">
                                <span className="label-text text-[#31aaf0]">PASSWORD</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full text-black"
                                    required />
                                <span className="absolute mt-4 ml-1" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                            </div>

                        </div>
                        <div className="flex justify-between mt-6">
                            <button className="w-[140px] rounded-sm h-[38px] bg-[#249AE0] justify-start ">REGISTER</button>
                            <Link to="/"><button className="w-[140px] rounded-sm  h-[38px] bg-[#249AE0] justify-end ">CANCEL</button></Link>
                        </div>



                    </form>
                    <hr className="bg-[#aabac3] "></hr>


                    <div className="  min-w-[255px] min-h-[45px] items-center pt-2 rounded-md mx-auto mb-4 space-y-2 justify-center text-center">
                        <p className="text-sm">ALREADY HAVE AN ACCOUNT?</p>
                        <div className="flex justify-between gap-8 pb-4 ">
                            <Link to="/login"><button className="w-[140px] rounded-sm h-[38px] bg-[#b5ab8e] justify-end ">LOGIN</button></Link>
                            <Link to="/"><button className="w-[140px] h-[38px] rounded-sm bg-[#b5ab8e] justify-end ">HOME</button></Link>

                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Register;