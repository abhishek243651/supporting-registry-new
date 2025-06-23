import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ items }) => {
  const location = useLocation();

  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
      <h4 className="mb-4">Dashboard</h4>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mb-2 ${
              location.pathname === item.path ? "fw-bold" : ""
            }`}
          >
            <Link to={item.path} className="text-white text-decoration-none">
              {item.icon && <span className="me-2">{item.icon}</span>}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
