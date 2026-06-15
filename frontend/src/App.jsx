import Login from "./components/Login/Login.jsx";
import Closed from "./Closed.jsx";
import Open from "./Open.jsx";
import Invitation from "./Invitation.jsx";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/closed" element={<Closed />} />
            <Route path="/open" element={<Open />} />
            <Route path="/inv" element={<Invitation />} />
        </Routes>
    );
}

export default App;