import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/twitter-png-log.png";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setmessage] = useState();
  const navigate = useNavigate();

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,13}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(email && password)) {
      setmessage("Please fill both the fields!");
    } else if (!emailRegex.test(email)) {
      setmessage("Please enter a valid email!");
    } else if (!passwordRegex.test(password)) {
      setmessage(
        "Password must contain at least 8 characters,one uppercase letter, one number and one special character"
      );
    } else {
      setmessage("");
      navigate("/homepage");
    }
  };

  return (
    <div className="login-container">
     
        <form className="loginform ">
        <img src={logo} height="80"  alt="img" />

        <h1 className="login-heading">Sign in to Twitter</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          className="email"
          type="email"
          required
          placeholder="enter your email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="password"
          type="text"
          required
          placeholder="enter your password"
        />

        <button
          onClick={(e) => handleSubmit(e)}
          className="loginbtn"
        >
          Login
        </button>
        <span className="message">  {message}</span>
      </form>
    </div>
  );
};

export default Login;
