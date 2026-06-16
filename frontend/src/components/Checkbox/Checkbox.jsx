import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div>
            <label className="checkbox-div">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;