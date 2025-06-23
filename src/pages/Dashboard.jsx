import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const sidebarItems = [
  { label: "Home", path: "/dashboard/home", icon: <FaHome /> },
  { label: "Users", path: "/dashboard/users", icon: <FaUser /> },
  { label: "Settings", path: "/dashboard/settings", icon: <FaCog /> },
];

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar items={sidebarItems} />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
