import "./Task.css";
import { useState } from "react";

const Task = ({ task, onClick }) => {
    const [isDone, setIsDone] = useState(false);

    const toggleStatus = () => {
        setIsDone((prevState) => !prevState);
      };

  return (
    <div className="task">
        <div className="task__title">
            <button           
                className={`circle-btn ${isDone ? "done" : "not-done"}`}
                onClick={toggleStatus}>
            </button>
            <h3 onClick={onClick} style={{cursor: "pointer"}}>{task.title}</h3>
            {/* звездочку типо важно */}
        </div>
        <div className="task__info">
            <h4>Полить на кухне, в зале и спальне</h4>
            <div className="task__tags">
                <div className="task__tag">12.03.25</div>
            </div>
        </div>
    </div>
  );
};

export default Task;
