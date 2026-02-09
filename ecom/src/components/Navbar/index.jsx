import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIs] = useState(false);
  const { token, loginDispatch } = useLogin();

  const onAuthClick = () => {
    if (token) {
      // LOGOUT
      loginDispatch({ type: "LOGOUT" });
      navigate("/");
    } else {
      // LOGIN
      navigate("/auth/login");
    }
    setIs(false);
  };

  return (
    <header className="flex items-center bg-sky-950 py-4 px-8 text-white">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-medium cursor-pointer"
      >
        Shop IT
      </h1>

      <nav className="flex ml-auto gap-6">
        <span
          onClick={() => navigate("/cart")}
          className="material-icons-outlined text-3xl cursor-pointer"
        >
          shopping_cart
        </span>

        <span
          onClick={() => navigate("/favorite")}
          className="material-icons-outlined text-3xl cursor-pointer"
        >
          favorite
        </span>

        <div className="relative">
          <span
            onClick={() => setIs(!isAccountDropDownOpen)}
            className="material-icons-outlined text-3xl cursor-pointer"
          >
            account_circle
          </span>

          {isAccountDropDownOpen && (
            <div className="absolute right-0 mt-2 bg-sky-600 rounded shadow-lg">
              <button
                onClick={onAuthClick}
                className="px-4 py-2 hover:bg-sky-700 w-full text-left"
              >
                {token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
