import Home from './Pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import { useDispatch } from 'react-redux';
import React from 'react';
import { generateUserChartData } from './Redux/dataSlice';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(generateUserChartData());
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App_component">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
