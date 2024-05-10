import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';
import "./Banner.css"
import header1 from "../../../../public/header1.png"
import header2 from "../../../../public/header2.jpg"
import header3 from "../../../../public/header3.jpg"


const Banner = () => {


    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <div className="banner-slider mx-auto mt-4">
            <Swiper {...swiperParams}>
                <SwiperSlide>
                    <div className="image relative h-[850px] w-[2000px] mx-auto bg-[#FFF1DE]">

                        <div className="lg:flex md:flex justify-between ">
                            <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                <div className="flex gap-4">
                                    <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                    <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                </div>



                            </div>
                            <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px] md:mt-[80px] sm:mt-2 ">
                                <img src={header1} alt="" />
                            </div>
                        </div>


                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative h-[850px] w-[2000px] mx-auto bg-[#FFF1DE]">

                        <div className="lg:flex md:flex justify-between ">
                            <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                <div className="flex gap-4">
                                    <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                    <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                </div>



                            </div>
                            <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px] md:mt-[80px] sm:mt-2 ">
                                <img className="" src={header2} alt="" />
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image relative h-[850px] w-[2000px] mx-auto bg-[#FFF1DE]">

                        <div className="lg:flex md:flex justify-between ">
                            <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                <div className="flex gap-4">
                                    <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                    <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                </div>



                            </div>
                            <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px] md:mt-[80px] sm:mt-2 ">
                                <img src={header3} alt="" />
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default Banner;
