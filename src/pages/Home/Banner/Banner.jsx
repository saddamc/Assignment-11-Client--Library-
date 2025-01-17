import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'



import "./Banner.css";

import header1 from "../../../assets/images/header1.png";
import header2 from "../../../assets/images/header2.jpg";
import header3 from "../../../assets/images/header3.jpg";

import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';



const Banner = () => {
    return (
        <div >
            <div className="banner-slider mx-auto  px-6 pb-10">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className="image relative  h-[850px] md:h-[850] lg:h-[750px] w-[1300px] mx-auto bg-[#F1C1BF]">

                            <div className="lg:flex justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[100px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#6c604e] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-500 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Add Now</button>

                                    </div>



                                </div>
                                <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 mb-12 ">
                                    <img src={header1} alt="" />
                                </div>
                            </div>


                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image relative h-[850px] md:h-[850] lg:h-[750px] w-[1300px] mx-auto bg-[#CDDD36]">

                            <div className="lg:flex  justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[100px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Add Now</button>

                                    </div>



                                </div>
                                <div className="justify-start lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 mb-12 ">
                                    <img className="h-[540px] " src={header2} alt="" />
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image relative  h-[850px] md:h-[850] lg:h-[750px] w-[1300px] mx-auto bg-[#88D2F8]">

                            <div className="lg:flex  justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[100px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Add Now</button>

                                    </div>



                                </div>
                                <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 mb-12 ">
                                    <img src={header3} alt="" />
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Banner;
