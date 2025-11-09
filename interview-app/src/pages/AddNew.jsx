import LectureCard from "../components/LectureCard";
import Lectures from "../lectures.json";
import AddBar from "../components/AddBar";
import "../styles/AddNew.css";

function AddNew() {

    function submit() {
        
    }

    return (
        <div className="add-lecture-page">
            <h1 className="header">Add Lecture</h1>
            <div className="time-input">
                <div className="text-border">
                    <div className="time-text">time:</div>
                </div>
                <input type="time" className="time-box"/>
            </div>
            <div className="module-input">
                <div className="text-border">
                    <div className="module-text">module:</div>
                </div>
                <input type="text" className="input-box" placeholder="Enter module"/>
            </div>
            <div className="venue-input">
                <div className="text-border">
                    <div className="venue-text">venue:</div>
                </div>
                <input type="text" className="input-box" placeholder="Enter venue"/>
            </div>
            <button className="submit-btn" onClick={submit}>Add</button>
        </div>
    );
}

export default AddNew;