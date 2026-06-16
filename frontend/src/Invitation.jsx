import invite from "./assets/invite.png";
import "./Invitation.css";
import { CgArrowLongDown } from "react-icons/cg";
import PinterestBoard from "./components/PinterestBoard.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import React, { useState } from "react";
import axios from "axios";
import { RiCloseLargeLine } from "react-icons/ri";

function Invitation() {
    const [going, setGoing] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleToggle = (choice) => {
        setGoing((prev) => (prev === choice ? null : choice));
    };

    console.log(
        localStorage.getItem("firstName"),
        localStorage.getItem("lastIn")
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("/user/rsvp", {
            firstName: localStorage.getItem("firstName"),
            lastIn: localStorage.getItem("lastIn"),
            going
        })
            .then(res => {
                console.log(res.data);
                if (res.data.status === "SUCCESS") {
                    setError("");
                    setSubmitted(true);
                } else {
                    setError(res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <div>
            <div className="white-div">
                <img src={invite} className="invite-img" alt="invite" />
                <CgArrowLongDown className="arrow"/>
            </div>
            <div className="yellow-div">
                <p className="text" id="d">
                    inspired by the summer solstice and midsummer celebrations,<br/>
                    <br/>
                    you are encouraged to wear floor-length dresses or skirts;<br/>
                    <br/>
                    white, floral pastel, or vibrant, it doesn't matter!<br/>
                </p>
                <div className="pinterest-board">
                    <PinterestBoard />
                </div>
            </div>
            <div className="green-div">
                <p id="c">we're going</p>
                <div className="title-div">
                    <p className="title" id="b">f</p>
                    <p className="title" id="b">lower picking!</p>
                </div>
                <p className="address">
                    Fancy Farms<br/>
                    5204 Drane Field Rd.<br/>
                    Lakeland, FL 33811
                </p>
                <p className="text">you may get dirt on you or it may rain, so bring a change of clothes/shoes if you want</p>
                <p>then we're having</p>
                <p className="title" id="b">dinner</p>
                <p className="address">
                    Cob & Pen<br/>
                    1221 S. Florida Ave.<br/>
                    Lakeland, FL 33803
                </p>
                <p className="text" id="a">**please arrive at my house no later than 2:15pm or we're leaving without you ;)</p>
            </div>
            <div className="yellow-div">
                {!submitted && (
                    <div>
                        {error && (
                            <div className="alert-box">
                                <p>access denied</p>
                                <RiCloseLargeLine
                                    onClick={() => setError("")}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        )}
                        <p className="title" id="f">rsvp</p>
                        <form onSubmit={handleSubmit}>
                            <div id="e">
                                <Checkbox
                                    label="will be there"
                                    checked={going === true}
                                    onChange={() => handleToggle(true)}
                                />
                                <Checkbox
                                    label="can't make it"
                                    checked={going === false}
                                    onChange={() => handleToggle(false)}
                                />
                            </div>
                            <button type="submit" className="btn">submit</button>
                        </form>
                    </div>
                )}
                <div className="msg">
                    {submitted && <p className="text" id="f">submitted successfully!</p>}
                </div>
            </div>
        </div>
    )
}

export default Invitation;