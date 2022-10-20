import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>Dragon news : {allNews.length}</h1>
            {
                allNews.map( news => <News key={news._id} news={news}></News>)
            }
        </div>
    );
};

export default Home;