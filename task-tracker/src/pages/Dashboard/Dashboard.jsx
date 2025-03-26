import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardComp from "../../components/Dashboard/Dashboard"
import TaskForm from "../../components/TaskForm/TaskForm";
import BoardForm from "../../components/BoardForm/BoardForm";
import "./Dashboard.css";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getMyLists, getTasksList } from "../../api/requests";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clickOnBoard } from "../../store/slice/boardSlice";


const Dashboard = () => {
  const dispatch = useDispatch();

  const currentBoardId = useSelector((state) => state.board.id);

  const data = [
    { id: 1, categories: ["мое"], name: "Список 1" },
    { id: 2, categories: ["мое"], name: "Список 2" },
    { id: 3, categories: ["избранное"], name: "Список 3" },
    { id: 4, categories: ["мое", "избранное"], name: "Список 4" },
  ];
  const [lists, setLists] = useState([]); // Стейт для хранения данных списков
  const [tasks, setTasks] = useState([]); // Стейт для хранения данных списков
  const [loading, setLoading] = useState(true); // Стейт для состояния загрузки
  const [error, setError] = useState(false); // Стейт для ошибок
  const [isModalBoardOpen, setIsModalBoardOpen] = useState(false); 
  const [isNewBoard, setIsNewBoard] = useState(true)
  const [boardData, setBoardData] = useState({id: 0, name: ''}); // Стейт для ошибок
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const { task_id } = useParams();  // берем id задачи из урла
  const { board_id } = useParams();  // берем id задачи из урла                  
  const navigate = useNavigate();
  const isModalOpen = Boolean(task_id);

  const handleTaskClick = (taskId) => {
    setSelectedTaskId(taskId);
    navigate(`/board/${board_id}#${taskId}`); // Добавляем taskId в URL через якорь
  };

  const handleCloseTaskForm = () => {
    setSelectedTaskId(null);
    navigate(`/board/${board_id}`); // Убираем якорь из URL
  };

  const closeModalBoard = () => {
    setIsModalBoardOpen(false);
  };
  const openModalBoard = (isNew) => {
    setIsNewBoard(isNew);
    setIsModalBoardOpen(true);
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        // const data = await getMyLists();
        setLists(data);

        if (board_id) {
          const board = data.find((item) => item.id === Number(board_id));
          if (board) {
            dispatch(clickOnBoard({ id: board.id, name: board.name }));
          }
        } else {
          if (currentBoardId && !task_id) {
            navigate(`/board/${currentBoardId}`);
          }
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setError(true);
      } finally {
        setLoading(false);  // Завершаем загрузку
      }
    };
    const hash = location.hash.replace("#", "");
    if (hash) {
      setSelectedTaskId(hash);
    }

    fetchLists();

  }, [board_id, currentBoardId, dispatch, navigate, location]); 


  return (
    <div className={`layout ${selectedTaskId ? 'layout--shifted' : ''}`}>
      <Sidebar msg={loading ? "Загрузка..." : error ? "Ошибка при загрузке данных" : ""} data={data} openBoardModal={openModalBoard}/>

      <div className="layout_right">
        <DashboardComp editBoard={openModalBoard} openTask={handleTaskClick}/>
      </div>

      {selectedTaskId && (
        <TaskForm 
          taskId={selectedTaskId} 
          onClose={handleCloseTaskForm} 
        />
      )}

      {isModalBoardOpen && (
        <BoardForm  onClose={closeModalBoard} boardId={currentBoardId} isNew={isNewBoard}/>
      )}

    </div>
  );
};

export default Dashboard;
