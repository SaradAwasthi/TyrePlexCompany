import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigation = useNavigate();

  const handleUserDetails = (e) => {
    const { name, value } = e?.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserRegistration = async () => {
    if (user.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (user.password !== user.confirm_password) {
      toast.error("Password and Confirm Password must be the same");
      return;
    }

    // Retrieve the stored users or initialize an empty array
    let storedUsers = JSON.parse(localStorage.getItem("registeredUser")) || [];

    // Check if the email is already registered
    const isEmailRegistered = storedUsers.some(
      (storedUser) => storedUser.email === user.email
    );

    if (isEmailRegistered) {
      toast.error("This email is already registered. Please use another email.");
      return;
    }

    // Add the new user to the array
    storedUsers.push(user);

    // Store the updated array back to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(storedUsers));

    // Clear the form fields after storing data
    setUser({
      full_name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    toast.success("Registration successful! Please log in.");
    navigation("/login");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-96 h-screen flex flex-col justify-center items-center">
          <span className="font-bold text-lg">Register User</span>
          <hr className="text-black h-3 w-full" />
          <span className="font-normal">
            Are you a user?{" "}
            <Link to="/login" className="text-blue-800 underline">
              Login
            </Link>
          </span>

          <div className="px-10 w-full">
            <div className="mt-2">
              <label className="font-semibold">
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="px-2">
                <input
                  type="text"
                  name="full_name"
                  value={user.full_name}
                  className="w-full border h-10 p-2"
                  placeholder="Enter Full Name"
                  onChange={handleUserDetails}
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="font-semibold">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <div className="px-2">
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  className="w-full border h-10 p-2"
                  placeholder="Enter Phone Number"
                  onChange={handleUserDetails}
                  maxLength={10}
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="font-semibold">
                Email <span className="text-red-600">*</span>
              </label>
              <div className="px-2">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="w-full border h-10 p-2"
                  placeholder="Enter email"
                  onChange={handleUserDetails}
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="font-semibold">
                Password <span className="text-red-600">*</span>
              </label>
              <div className="px-2 flex">
                <input
                  value={user.password}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  className="w-64 border h-10 p-2"
                  placeholder="Enter Password"
                  onChange={handleUserDetails}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="border w-10 items-center flex flex-col justify-center"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="mt-2">
              <label className="font-semibold">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <div className="px-2 flex">
                <input
                  value={user.confirm_password}
                  name="confirm_password"
                  type={confirmPasswordVisible ? "text" : "password"}
                  className="w-64 border h-10 p-2"
                  placeholder="Enter Password"
                  onChange={handleUserDetails}
                />
                <span
                  onClick={toggleConfirmPasswordVisible}
                  className="border w-10 items-center flex flex-col justify-center"
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
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
            onClick={handleUserRegistration}
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

export default Signup;
