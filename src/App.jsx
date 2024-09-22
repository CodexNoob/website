import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/program";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/campus";
import Feedback from "./Components/Feedback/feedback";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/video";
import Home from "./Components/Home/Home";
import LoginPage from "./Components/Login/LoginPage";
import Afterlogin from "./UserUI/Afterlogin/Afterlogin";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
