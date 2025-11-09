function LectureCard({time, module, venue}) {

    function handleDelete() {
        alert("deleting")
    }

    return (
    <div className="lecture-card">
        <div className="time">{time}</div>
        <div className="module">{module}</div>
        <div className="venue">{venue}</div>
        <button className="del-btn" onClick={handleDelete}>
            <img src={"../assets/delete.png"}/>
        </button>
    </div>
  );
}

export default LectureCard;