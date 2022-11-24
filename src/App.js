import Home from "./Pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import UserDetails from "./Pages/UserDetails";
import Header from "./component/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_component">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
