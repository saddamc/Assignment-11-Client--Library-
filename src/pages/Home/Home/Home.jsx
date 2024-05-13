import TabCategories from "../../../component/TabCategories/TabCategories";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Favourite from "../Favourite/Favourite";



const Home = () => {
    return (
        <div className="font-Roboto">
            <Banner></Banner>
            <TabCategories></TabCategories>
            <Favourite></Favourite>
            <Books></Books>

        </div>
    );
};

export default Home;