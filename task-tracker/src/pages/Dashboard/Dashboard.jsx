import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardComp from "../../components/Dashboard/Dashboard"
import TaskForm from "../../components/TaskForm/TaskForm";
import "./Dashboard.css";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getMyLists } from "../../api/requests";


const Dashboard = () => {
  const data = [
    { id: 1, categories: ["мое"], name: "Список 1" },
    { id: 2, categories: ["мое"], name: "Список 2" },
    { id: 3, categories: ["избранное"], name: "Список 3" },
    { id: 4, categories: ["мое", "избранное"], name: "Список 4" },
  ];
  const [lists, setLists] = useState([]); // Стейт для хранения данных списков
  const [loading, setLoading] = useState(true); // Стейт для состояния загрузки
  const [error, setError] = useState(false); // Стейт для ошибок

  const { id } = useParams();  // берем id задачи из урла
  const navigate = useNavigate();
  const isModalOpen = Boolean(id);

  const closeModal = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await getMyLists();
        setLists(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
        setError(true);
      } finally {
        setLoading(false);  // Завершаем загрузку
      }
    };

    fetchLists();
  }, []); 


  return (
    <div className="layout">
      <Sidebar msg={loading ? "Загрузка..." : error ? "Ошибка при загрузке данных" : ""} data={lists} />

      <div className="layout_right">
        <DashboardComp />
      </div>

      {/* Модалка открыта, если есть task id в урле */}
      {isModalOpen && (
        <TaskForm taskId={id} onClose={closeModal} />
      )}
    </div>
  );
};

export default Dashboard;
