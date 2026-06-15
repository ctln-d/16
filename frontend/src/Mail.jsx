import closedEnvelope from "./assets/closed-envelope.png";
import "./Mail.css";

function Mail() {
    return (
        <div className="mail">
            <p className="title" id="mail-title">
                you've<br />
                got<br />
                mail!
            </p>
            <img src={closedEnvelope} className="closed" alt="closed envelope" />
        </div>
    )
}

export default Mail;