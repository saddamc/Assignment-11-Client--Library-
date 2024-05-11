import { Link } from "react-router-dom";


const Login = () => {




    return (
        <div className="bg-[url('/login.jpg')] bg-no-repeat h-[1300px] mx-auto max-w-[1500px] text-center">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card shrink-0  max-w-xl shadow-2xl bg-[#113B54] text-white">
                        <h1 className="text-3xl font-bold pt-8 border-b-1 mb-4 border-[#aabac3] ">LOGIN</h1>
                        <hr></hr>
                        <form onSubmit="" className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#31aaf0] ">USER EMAIL</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"

                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#31aaf0]">PASSWORD</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span className="absolute mt-4 ml-1" >


                                    </span>
                                </div>

                            </div>
                            <div className="flex gap-8 mt-6">
                                <button className="w-[120px] h-[38px] bg-[#249AE0] justify-start ">LOGIN</button>
                                <Link to="/"><button className="w-[120px] h-[38px] bg-[#249AE0] justify-end ">CANCEL</button></Link>
                            </div>



                        </form>
                        <hr className="bg-[#aabac3] "></hr>


                        <div className="  min-w-[255px] min-h-[45px] items-center pt-2 rounded-md mx-auto mb-4 space-y-2 justify-center text-center">
                            <p className="text-sm">CONTINUE WITH</p>
                            <div className="flex gap-4 justify-center pb-4">
                                <Link to="/register"><button className="w-[120px] h-[38px] bg-[#b5ab8e] justify-end ">REGISTER</button></Link>
                                <Link to="/"><button className="w-[120px] h-[38px] bg-[#b5ab8e] justify-end ">GOOGLE</button></Link>

                            </div>
                        </div>





                    </div>


                </div>

            </div>
        </div>
    );
};

export default Login;