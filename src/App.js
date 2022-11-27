import Home from './Pages/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { generateUserChartData, generateUserData } from './Redux/dataSlice';

function App() {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.data.initialData);

  React.useEffect(() => {
    dispatch(generateUserData(500));
  }, []);

  React.useEffect(() => {
    if (initialData.length > 0) {
      dispatch(generateUserChartData());
    }
  }, [initialData]);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="App_component">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
