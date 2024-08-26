import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
      </Routes>
    </>
  );
}

export default App;
