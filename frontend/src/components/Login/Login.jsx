import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import "./Login.css";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastIn, setLastIn] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/user/login", {
            firstName,
            lastIn
        })
            .then(res => {
                console.log(res.data);
                if (res.data.status === "SUCCESS") {
                    localStorage.setItem("firstName", firstName);
                    localStorage.setItem("lastIn", lastIn);
                    setError("");
                    navigate("/closed");
                } else {
                    setError(res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="bg">
            <p className="title">enter your name</p>

            {error && (
                <div className="alert-box">
                    <p>access denied</p>
                    <RiCloseLargeLine
                        onClick={() => setError("")}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="first-name"
                />
                <input
                    required
                    placeholder="last initial"
                    value={lastIn}
                    onChange={(e) => setLastIn(e.target.value)}
                    className="last-in"
                />
                <button type="submit" className="btn">login</button>
            </form>
        </div>
    )
}

export default Login;