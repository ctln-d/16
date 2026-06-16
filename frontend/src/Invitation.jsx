import invite from "./assets/invite.png";
import "./Invitation.css";
import { CgArrowLongDown } from "react-icons/cg";
import PinterestBoard from "./components/PinterestBoard.jsx";
import Checkbox from "./components/Checkbox.jsx";

function Invitation() {
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
                    <p className="title" id="a">f</p>
                    <p className="title" id="a">lower picking!</p>
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
            </div>
            <div className="yellow-div">
                <p className="title">rsvp</p>
                <form>
                    <div id="e">
                        <Checkbox label="will be there" />
                        <Checkbox label="can't make it" />
                    </div>
                    <button type="submit" className="btn">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Invitation;