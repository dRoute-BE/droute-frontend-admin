import { useNavigate } from "react-router-dom";
import whiteLogo from "../assets/transparentIcon.png"; 

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-24 border-b border-gray-700">
        <img
          src={whiteLogo}
          alt="logo"
          className="w-34 h-34 object-contain "
        />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-4 p-6">
        {[
          { label: "Verify Driver", path: "/live" },
          { label: "User", path: "/predict" },
          { label: "Driver", path: "/historical" },
          { label: "Order", path: "/profile" },
           { label: "Journey", path: "/profile" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="text-left text-lg font-medium hover:text-yellow-400 transition-transform hover:translate-x-1"
          >
            {item.label}
          </button>
        ))}
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
