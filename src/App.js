import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favourites";
import Details from "./Pages/Details";


function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white-200 text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;