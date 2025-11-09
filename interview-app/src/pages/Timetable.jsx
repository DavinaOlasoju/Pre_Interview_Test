import LectureCard from "../components/LectureCard";
import Lectures from "../lectures.json";
import AddBar from "../components/AddBar";
import "../styles/Timetable.css";
import "../styles/Navbar.css";

function Timetable() {

    return (
        <div className="timetable-page">
            <h1 className="header">My Timetable</h1>
            <div className="lecture-list">
                {Lectures.map((lecture) => (<LectureCard key={lecture.id} time={lecture.time} module={lecture.module} venue={lecture.venue} />))}
            </div>
            <AddBar />
        </div>
    );
}

export default Timetable;