import img1 from "../../../../public/f-1.jpg"
import img2 from "../../../../public/f-2.jpg"
import img3 from "../../../../public/f-3.jpg"

const Favourite = () => {
    return (
        <div className="mx-auto max-w-7xl flex gap-6 px-12">
            <div className="card card-compact w-96 bg-base-100  shadow-xl rounded-md">
                <figure><img className="w-96" src={img1} alt="Shoes" /></figure>
                <div className="card-body bg-[#FF5252] text-white">
                    <h2 className="card-title font-Lobster">Experience Yourself</h2>
                    <p>Efficiently manage students, staff, courses, and resources with user-friendly interface, facilitating seamless communication and streamlined operations.</p>
                    <div className="card-actions mt-4">
                        <button className="rounded-md w-[110px] h-[35px] border-none bg-[#FF9800] text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100  shadow-xl rounded-md">
                <figure><img className="w-96" src={img2} alt="Shoes" /></figure>
                <div className="card-body bg-[#00BCD4] text-white">
                    <h2 className="card-title font-Lobster">Quality Lessons</h2>
                    <p>Engaging, interactive lessons tailored to diverse learning styles, fostering critical thinking, creativity, and deep understanding across subjects.</p>
                    <div className="card-actions mt-4">
                        <button className="rounded-md w-[110px] h-[35px] border-none bg-[#4F2382] text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100  shadow-xl rounded-md">
                <figure><img className="w-96" src={img3} alt="Shoes" /></figure>
                <div className="card-body bg-[#5D2999] text-white">
                    <h2 className="card-title font-Lobster">Toys and Games</h2>
                    <p>Innovative toys and games sparking imagination, promoting learning through play, and providing endless entertainment for children of all ages.</p>
                    <div className="card-actions mt-4">
                        <button className="rounded-md w-[110px] h-[35px] border-none bg-[#00BCD4] text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourite;