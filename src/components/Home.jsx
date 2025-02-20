
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData()
  return (
    <div>
      <h1 className='text-center text-xl font-bold '>Total collection of coffee:{coffees.length}</h1>
      <div className= 'm-20 grid grid-cols-2 gap-6'>     
      {
        coffees.map(coffee => <CoffeeCard
          coffee={coffee}
          key={coffee.insertedId}></CoffeeCard>)
      }
    </div>
    </div>
    

  );
};

export default Home;