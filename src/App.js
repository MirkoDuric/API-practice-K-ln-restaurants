import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TabComponent from "./components/TabComponent";
import Sidebar from "./components/Sidebar";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
      <Route path=":restaurantName" element={<NavComponent />} />
>>>>>>> cd911b694b6c3e0d974010933f6e1680a671b947
    </Routes>
  );
}

export default App;
//<Route path=":restaurantName" element={<RestaurantDetails />} />
