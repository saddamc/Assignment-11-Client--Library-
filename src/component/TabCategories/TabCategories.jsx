import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCategories = () => {
    return (
        <Tabs>
            <div className=' px-6 py-10 mx-auto font-Fira space-y-6'>
                <h2 className='mx-auto text-center text-3xl font-bold'>Browse Books By Categories</h2>
                <p className='mx-auto max-w-[550px] '>Book categories provide a structured way to organize books based on their content, genre, or theme, facilitating easier browsing and discovery.</p>
                <div className='flex font-bold text-lg items-center justify-center'>
                    <TabList>
                        <Tab>Sci-Fi</Tab>
                        <Tab>Drama</Tab>
                        <Tab>History</Tab>
                        <Tab>Thriller</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;