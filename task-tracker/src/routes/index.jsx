import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import TaskForm from "../components/TaskForm/TaskForm";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tasks/:id" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
