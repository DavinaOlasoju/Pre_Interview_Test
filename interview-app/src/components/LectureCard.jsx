import del from "../assets/delete.png";

function LectureCard({time, module, venue}) {

    function handleDelete() {
        alert("deleting")
    }

    return (
    <div className="lecture-card">
        <div className="lecture-info">
            <div className="time">{time}</div>
            <div className="module">{module}</div>
            <div className="venue">{venue}</div>
        </div>
        
        <button className="delete-btn" onClick={handleDelete}>
            <img src={del}/>
        </button>
    </div>
  );
}

export default LectureCard;