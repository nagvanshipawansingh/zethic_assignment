import Home from './Pages/Home';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { generateUserChartData, generateUserData } from './Redux/dataSlice';
import CarManufacturerSidebar from './component/CarManufacturerSidebar';
import FilterUserByManufacturer from './component/FilterUserByManufacturer';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const initialData = useSelector((state) => state.data.initialData);

  React.useEffect(() => {
    dispatch(generateUserData(500));
  }, []);

  React.useEffect(() => {
    if (initialData.length > 0) {
      dispatch(generateUserChartData());
    }
  }, [initialData]);

  const renderSidebars = () => {
    switch (location.pathname) {
      case '/':
        return <Sidebar />;
      case '/car':
        return <CarManufacturerSidebar />;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSidebars()}

      <div className="App_component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<FilterUserByManufacturer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
