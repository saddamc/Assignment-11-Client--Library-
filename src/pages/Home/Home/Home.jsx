import TabCategories from "../../../component/TabCategories/TabCategories";
import Banner from "../Banner/Banner";
import Favourite from "../Favourite/Favourite";



const Home = () => {
    return (
        <div className="font-Roboto">
            <Banner></Banner>
            <TabCategories></TabCategories>
            <Favourite></Favourite>

        </div>
    );
};

export default Home;