import "./Checkbox.css";

const Checkbox = ({ label }) => {
    return (
        <div>
            <label className="checkbox-div">
                <input type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;