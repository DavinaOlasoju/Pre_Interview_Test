import LectureCard from "../components/LectureCard";
import Lectures from "../lectures.json";
import AddNew from "../components/AddNew";
function Timetable() {

    return (
        <div className="timetable-page">
            <h1>My Timetable</h1>
            <div className="lecture-list">
                {Lectures.map((lecture) => (<LectureCard key={lecture.id} time={lecture.time} module={lecture.module} venue={lecture.venue} />))}
            </div>
            <AddNew />
        </div>
    );
}

export default Timetable;