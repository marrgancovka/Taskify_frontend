import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NewTask from "../NewTask/NewTask";
import addTask from "../../assets/icons/add_circle_24dp_007AFF_FILL0_wght300_GRAD0_opsz24.svg"
import Button from "../Button/Button";

const DashboardComp = ({editBoard, openTask}) => {
  const navigate = useNavigate();

  const currentBoardId = useSelector((state) => state.board.id);
  const currentBoardName = useSelector((state) => state.board.name);

  const [isOpenNewTask, setIsOpenNewTask] = useState(false);

  const tasks = [
    { id: 1, title: "Задача 1", description: "Описание к задаче1", due_date: "", priority: "", is_completed: false, board_id: 1, section_id:1 },
    { id: 2, title: "Задача 2", description: "Описание к задаче2", due_date: "", priority: "", is_completed: false, board_id: 1, section_id:1 },
    { id: 3, title: "Задача 3", description: "Описание к задаче3", due_date: "", priority: "", is_completed: false, board_id: 1, section_id:1 },

  ];

  const handleOpenNewTask = () => {
    setIsOpenNewTask(true)
  }
  const handleCloseNewTask = () => {
    setIsOpenNewTask(false)
  }

  useEffect(()=>{
    try{
      console.log('useEffect dashboardcomp')
    }catch{

    }
  },[])

  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <h1>{currentBoardName}</h1>
        <h1>{tasks.length}</h1>
      </div>
      <div className="dashboard__main">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onClick={()=>{openTask(task.id)}} />
        ))}
        {!isOpenNewTask && (
            <Button icon={addTask} text={"Добавить задачу"} mode={'white'} position={'left'} onClick={handleOpenNewTask}/>
        )}
        {isOpenNewTask&&(
          <NewTask onClose={handleCloseNewTask}/>
        )}
      </div>
      <button onClick={()=>{editBoard(false)}}>изменить</button>
      <button className="floating-btn">+</button>
    </div>
  );
};

export default DashboardComp;
