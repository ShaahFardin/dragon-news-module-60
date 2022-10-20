import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const Catagories = () => {
    const catagoryNews = useLoaderData();
    return (
        <div>
            <h2>This catagory have catagorycatagoryNews {catagoryNews.length}</h2>
            {
                catagoryNews.map(news => <News key={news._id} news={news}></News>)
            }
        </div>
    );
};

export default Catagories;