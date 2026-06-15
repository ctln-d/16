import invite from "./assets/invite.png";
import "./Invitation.css";
import { CgArrowLongDown } from "react-icons/cg";
import { PinterestBoard } from "./components/PinterestBoard.jsx";

function Invitation() {
    return (
        <div>
            <div className="invite-div">
                <img src={invite} className="invite-img" alt="invite" />
                <CgArrowLongDown className="arrow"/>
            </div>
            <div className="dress-div">
                <p className="text">
                    inspired by the summer solstice and midsummer celebrations,<br/>
                    <br/>
                    you are encouraged to wear floor-length dresses or skirts;<br/>
                    <br/>
                    white, floral pastel, or vibrant, it doesn't matter!<br/>
                    <PinterestBoard
                        boardUrl="https://pin.it/2vwe5gIBn"
                        boardWith={600}
                        scaleHeight={500}
                    />
                </p>
            </div>
        </div>
    )
}

export default Invitation;