import React from 'react'
import './Home.css';
import CountryChart from '../component/Chaarts/CountryChart'
import CarMakerChart from '../component/Chaarts/CarMakerChart'
import CarAgeChart from '../component/Chaarts/CarAgeChart'


function Home() {
  return (<>
    <div className='home'>
    <CountryChart/>
    <CarMakerChart/>
    <hr />
    <CarAgeChart/>
 </div>
    
    </>
  )
}

export default Home