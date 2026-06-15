import closedEnvelope from "./assets/closed-envelope.png";
import "./Closed.css";
import { useNavigate } from "react-router-dom";

function Closed() {
    const navigate = useNavigate();

    return (
        <div className="mail">
            <p className="title" id="mail-title">
                you've<br />
                got<br />
                mail!
            </p>
            <img
                src={closedEnvelope}
                className="closed"
                alt="closed envelope"
                onClick={() => navigate("/open")}
            />
            <p className="open-text">tap to open</p>
        </div>
    )
}

export default Closed;