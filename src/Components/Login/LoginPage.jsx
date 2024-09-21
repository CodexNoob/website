import "./LoginPage.css";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import back from "../../assets/back-icon.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Login = () => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // Create a navigate instance

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    //console.log("Email:", email, "Password:", password);
  
     // Navigate to afterlogin page on successful login
    navigate("/Afterlogin");
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="hero container" style={{ width: "100vw" }}>
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
             // value={password}
              //onChange={(e) => setPassword(e.target.value)}
             // required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#"> Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don`t have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
        <img
          src={back}
          alt="Back to home"
          className="back"
          onClick={handleBackClick} // Add the onClick handler
          style={{ cursor: "pointer" }} // Add pointer style for better UX
        />
      </div>
    </div>
  );
};

export default Login;
