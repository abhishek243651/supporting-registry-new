import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const sidebarItems = [
  { label: "Home", path: "/dashboard/home" },
  { label: "Users", path: "/dashboard/users" },
  { label: "Settings", path: "/dashboard/settings" },
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
