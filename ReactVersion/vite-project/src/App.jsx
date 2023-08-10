import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewPlayerForm from "./Components/NewPlayerForm";
import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import { fetchAllPlayers } from "./AjaxHelper"; // Adjust the path accordingly
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Link to="/">All Players</Link>
        <Link to="/navbar">To Navbar</Link>
        <Link to="someURL">To New Player Form</Link>
        <Link to="someURL">To Single Player</Link>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<Navbar />} />
          <Route path="/players/:id" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
