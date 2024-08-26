import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(
    !!localStorage.getItem("userLoggedIn")
  );
  const [customers, setCustomers] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    let storedUsers = JSON.parse(localStorage.getItem("registeredUser"));

    if (!Array.isArray(storedUsers)) {
      storedUsers = [];
    }

    if (storedUsers.length === 0) {
      toast.error("No user data found. Please register first.");
      return;
    }

    const matchedRecord = storedUsers.find(
      (user) =>
        user.email === customers.email && user.password === customers.password
    );

    if (matchedRecord) {
      console.log("Record matched");
      toast.success("Login successful!");
      localStorage.setItem("userLoggedIn", "true");
      setUserLoggedIn(true);
      navigate("/");
    } else {
      console.error("Error: Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-96 h-96 flex flex-col justify-center items-center">
          <span className="font-bold text-lg">Login</span>
          <hr className="text-black h-1 w-full " />
          <span className="font-normal">
            Are you a new user?{" "}
            <Link to="/signup" className="text-blue-800 underline">
              Register here
            </Link>
          </span>
          <div className="px-10 w-full">
            <div className="pt-2 ">
              <label className="font-semibold">Email: </label>
              <div className="px-2">
                <input
                  type="email"
                  className="w-full border h-10 p-2"
                  placeholder="Enter email"
                  name="email"
                  value={customers.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="font-semibold">Password: </label>
              <div className="px-2 flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-64 border h-10 p-2"
                  placeholder="Enter Password"
                  value={customers.password}
                  name="password"
                  onChange={handleChange}
                />{" "}
                <span
                  onClick={togglePasswordVisibility}
                  className="border w-10 items-center flex flex-col justify-center"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-xs text-gray-400 mt-1">
            By continuing, I agree to the{" "}
            <span className="text-red-600 font-semibold">Terms of Use</span> &{" "}
            <span className="text-red-600 font-semibold">Privacy Policy</span>
          </h1>

          <button
            onClick={handleLogin}
            className="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 rounded text-sm"
          >
            CONTINUE
          </button>

          <h1 className="text-xs text-gray-400 mt-4">
            Have you trouble in?{" "}
            <span className="text-red-600 font-semibold">Get help</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Login;
