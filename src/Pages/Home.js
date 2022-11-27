import React from 'react';
import './Home.css';
import CountryChart from '../component/Chaarts/CountryChart';
import CarMakerChart from '../component/Chaarts/CarMakerChart';
import CarAgeChart from '../component/Chaarts/CarAgeChart';
import Filter from '../component/FilterDropdown/filter';

function Home() {
  return (
    <>
      <div className="home">
        <Filter />
        <CountryChart />
        <CarMakerChart />
        <CarAgeChart />
      </div>
    </>
  );
}

export default Home;
