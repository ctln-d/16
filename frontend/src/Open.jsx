import back from "./assets/open-envelope.png";
import front from "./assets/open-front.png";
import invite from "./assets/invite.png";
import {useEffect, useState} from "react";
import "./Open.css";
import { useNavigate } from "react-router-dom";

function Open() {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 200)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="envelope">
            <div className={`stack ${loaded ? "open" : ""}`} onClick={() => navigate("/inv")}>
                <img
                    src={back}
                    className="envelope-open"
                    alt="envelope"
                />
                <div className="window">
                    <img
                        src={invite}
                        className="invite"
                        alt="invite"
                    />
                </div>
                <img
                    src={front}
                    className="envelope-front"
                    alt="envelope"
                />
            </div>
        </div>
    );
}

export default Open;