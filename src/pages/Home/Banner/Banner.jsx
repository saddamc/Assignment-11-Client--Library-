import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./Banner.css"
import header1 from "../../../../public/header1.png"
import header2 from "../../../../public/header2.jpg"
import header3 from "../../../../public/header3.jpg"


const Banner = () => {
    return (
        <div >
            <div className="banner-slider mx-auto mt-4">
                <Swiper
                    className='relative group'
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextE1: ".button-next-slide",
                        prevE1: ".button-prev-slide",
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <div className="image relative h-[750px] w-[1600px] mx-auto bg-[#FFF1DE]">

                            <div className="lg:flex justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                    </div>



                                </div>
                                <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 ">
                                    <img src={header1} alt="" />
                                </div>
                            </div>


                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image relative h-[750px] w-[1600px] mx-auto bg-[#FFF1DE]">

                            <div className="lg:flex  justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                    </div>



                                </div>
                                <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 ">
                                    <img className="h-[570px] " src={header2} alt="" />
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image relative h-[750px] w-[1600px] mx-auto bg-[#FFF1DE]">

                            <div className="lg:flex  justify-between ">
                                <div className="content justify-start title-content my-auto items-center lg:mt-[200px] md:mt-[200px] lg:ml-[150px] md:ml-[150px] max-w-[450px] space-y-6 top-[10%] left-[3rem]">
                                    <div className=" text-xl font-extrabold text-[#fab247] ">GET THE LASTEST BEST SELLER</div>
                                    <div className='des text-6xl font-extrabold '>Meet Your Next Favorite Book</div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline bg-orange-400 text-white w-[120px] border-none">Latest Books</button>
                                        <button className="btn btn-outline bg-black text-white w-[120px] border-none">Buy Now</button>

                                    </div>



                                </div>
                                <div className="justify-end lg:mr-24 md:mr-24 lg:mt-[80px]  sm:mt-2 ">
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
