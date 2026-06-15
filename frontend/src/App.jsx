import { React } from "react";
import Login from "./components/Login/Login.jsx";
import Mail from "./Mail.jsx"
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mail" element={<Mail />} />
        </Routes>
    );
}

export default App;