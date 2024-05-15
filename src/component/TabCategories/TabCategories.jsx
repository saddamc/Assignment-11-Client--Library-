import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./TagCategories.css";
import BookCard from './BookCard';

const TabCategories = () => {
    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/book`)
    //         .then(data => {
    //             setBooks(data.data);
    //         })
    // }, [])



    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/book`)
            setBooks(data)
            // console.log(data)
        }
        getData()
    }, [])

    return (
        <Tabs>
            <div className='max-w-7xl px-6 py-10 mx-auto font-Fira space-y-6'>
                <h2 className='mx-auto text-center text-4xl font-bold'>Browse Books By Categories</h2>
                <p className='mx-auto max-w-[550px] '>Book categories provide a structured way to organize books based on their content, genre, or theme, facilitating easier browsing and discovery.</p>
                <div className='flex font-bold text-xl items-center justify-center'>
                    <TabList>
                        <Tab>Sci-Fi</Tab>
                        <Tab>Drama</Tab>
                        <Tab>History</Tab>
                        <Tab>Thriller</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid-container'>
                        {books
                            .filter(j => j.category === 'Sci-Fi')
                            .map(bo => (
                                <BookCard key={bo._id} bo={bo}
                                />))}
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='grid-container'>
                        {books
                            .filter(j => j.category === 'Drama')
                            .map(bo => (
                                <BookCard key={bo._id} bo={bo}
                                />))}
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='grid-container'>
                        {books
                            .filter(j => j.category === 'History')
                            .map(bo => (
                                <BookCard key={bo._id} bo={bo}
                                />))}
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='grid-container'>
                        {books
                            .filter(j => j.category === 'Thriller')
                            .map(bo => (
                                <BookCard key={bo._id} bo={bo}
                                />))}
                    </div>

                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;
TabCategories.propTypes = {
    books: PropTypes.func
}