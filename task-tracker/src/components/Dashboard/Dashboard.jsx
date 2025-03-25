import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Task from "../Task/Task";

const DashboardComp = () => {
  const navigate = useNavigate();

  const tasks = [
    { id: 1, title: "Задача 1" },
    { id: 2, title: "Задача 2" },
    { id: 3, title: "Задача 3" },
  ];

  const handleTaskClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <h1>Список дел</h1>
        <h1>{tasks.length}</h1>
      </div>
      <div className="dashboard__main">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onClick={() => handleTaskClick(task.id)} />
        ))}
      </div>
      <button className="floating-btn">+</button>
    </div>
  );
};

export default DashboardComp;
