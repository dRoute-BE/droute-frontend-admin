import { useNavigate, useLocation } from "react-router-dom";
import whiteLogo from "../assets/transparentIcon.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔍 Get current path

  const navItems = [
    { label: "Verify Driver", path: "/VerifyDriver" },
    { label: "User", path: "/UserEntity" },
    { label: "Driver", path: "/DriverEntity" },
    { label: "Order", path: "/profile" },
    { label: "Journey", path: "/profile" },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-24 border-b border-gray-700">
        <img src={whiteLogo} alt="logo" className="w-34 h-34 object-contain" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-4 p-6">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`text-left text-lg font-medium transition-transform hover:translate-x-1 px-3 py-2 rounded-md ${
                isActive
                  ? "bg-yellow-100 border border-yellow-400 text-yellow-800"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-6 border-t border-gray-700">
        <button
          onClick={() => navigate("/logout")}
          className="text-left text-lg font-semibold hover:text-red-400 transition-transform hover:translate-x-1"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navigation;
