import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`bg-dark text-white p-3 d-flex flex-column`}
      style={{
        width: collapsed ? "70px" : "250px",
        height: "100vh",
        transition: "width 0.3s",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        {!collapsed && <h5 className="mb-0">Dashboard</h5>}
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </button>
      </div>

      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mb-2 ${
              location.pathname === item.path ? "fw-bold" : ""
            }`}
          >
            <Link
              to={item.path}
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <span className="me-2">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
