import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiUserSwitchFill } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";





const Login = () => {

    const { loginIn, googleLogin, user, loading } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        setRegisterError('');
        setSuccess('');

        loginIn(email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user)
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };



                /**get access token */
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            Swal.fire({
                                title: "User Login Successfully !",
                                icon: "success"
                            });
                            navigate(location?.state ? location.state : '/')
                        }
                    })


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

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "User Login Successfully !",
                    icon: "success"
                });
                navigate('/')
            })
    }

    if (user || loading) return


    return (
        <div className="bg-[url('https://i.ibb.co/Xkw31hT/login.jpg')] bg-no-repeat h-[1300px]  mx-auto max-w-[1500px] text-center">


            <div>
                <p className="text-left text-[#C4AC8C] ">.</p>
                <div className="card shrink-0  mx-auto w-[440px] mt-[330px] shadow-2xl shadow-black bg-[#113B54] text-white">
                    <div>
                        <h1 className="text-3xl flex items-center text-center justify-center gap-4 font-bold pt-8 border-b-1 mb-4 ">
                            <span className="text-6xl ">
                                <PiUserSwitchFill />
                            </span> LOGIN</h1>
                    </div>
                    <hr></hr>
                    <form onSubmit={handleLogin} className="card-body mx-auto">
                        <div className="form-control w-[350px] ">
                            <label className="label">
                                <span className="label-text text-[#31aaf0] ">USER EMAIL</span>
                            </label>
                            <input
                                type="email"
                                name="email"

                                placeholder="email"
                                className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control w-[350px] ">
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
                            <button className="w-[140px] rounded-sm h-[38px] bg-[#249AE0] justify-start ">LOGIN</button>
                            <Link to="/"><button className="w-[140px] rounded-sm  h-[38px] bg-[#249AE0] justify-end ">CANCEL</button></Link>
                        </div>



                    </form>
                    <hr className="bg-[#aabac3] "></hr>


                    <div className="  min-w-[255px] min-h-[45px] items-center pt-2 rounded-md mx-auto mb-4 space-y-2 justify-center text-center">
                        <p className="text-sm">CONTINUE WITH</p>
                        <div className="flex justify-between gap-8 pb-4 ">
                            <Link to="/register"><button className="w-[140px] rounded-sm h-[38px] bg-[#b5ab8e] justify-end ">REGISTER</button></Link>
                            <button onClick={handleGoogleLogin} className="bg-yellow-700 w-[140px]  px-2 py-1 font-semibold text-white rounded-sm flex items-center justify-center">
                                <FcGoogle></FcGoogle>
                                <span className="ml-1">Google</span></button>

                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Login;