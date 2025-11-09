import add from "../assets/add-new.jpg";

function AddBar() {

    function addLecture() {
        window.location.href = "/add-lecture";
    }

    return (
        <div className="add-bar">
            <button className="add-btn" onClick={addLecture}>
                <img src={add}/>
            </button>
            <div className="add-text">Add New</div>
        </div>
    )
}

export default AddBar;