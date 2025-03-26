import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import TaskForm from "../components/TaskForm/TaskForm";
import ContextMenuBoard from "../components/ContextMenuBoard/ContextMenuBoard";
import BoardForm from "../components/BoardForm/BoardForm";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board/:board_id" element={<Dashboard />} />
        <Route path="test" element={<BoardForm />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
