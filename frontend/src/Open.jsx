import back from "./assets/open-envelope.png";
import front from "./assets/open-front.png";
import invite from "./assets/invite.png";
import { useState } from "react";

function Open() {
    const [open, setOpen] = useState(false);

    return (
        <div className="envelope">
            <div className={`stack ${loaded ? "open" : ""}`}>
                <img src={back} className="envelope-open" />
                <div className={`window ${open ? "open" : ""}`}>
                    <img src={invite} className="invite" />
                </div>
                <img src={front} className="envelope-front" />
            </div>
        </div>
    )
}

export default Open;