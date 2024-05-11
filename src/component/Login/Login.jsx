import { Link } from "react-router-dom";




const Login = () => {




    return (
        <div className="bg-[url('/login.jpg')] bg-no-repeat h-[1300px] mx-auto max-w-[1500px] text-center">


            <div>
                <p className="text-left text-[#C4AC8C] ">.</p>
                <div className="card shrink-0  mx-auto max-w-sm mt-[330px] shadow-2xl bg-[#113B54] text-white">
                    <div>
                        <h1 className="text-3xl font-bold pt-8 border-b-1 mb-4 "> <span>
                        </span> LOGIN</h1>
                    </div>
                    <hr></hr>
                    <form className="card-body">
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
                            <Link to="/"><button className="w-[140px] h-[38px] rounded-sm bg-[#b5ab8e] justify-end ">GOOGLE</button></Link>

                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Login;