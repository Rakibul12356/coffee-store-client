// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const coffees = useLoaderData()
    return (
      <div>
        <h1>Total collection of coffee:{coffees.length}</h1>
      </div>
    );
};

export default Home;