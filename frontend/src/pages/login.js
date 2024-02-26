import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const login = () => {
    const data = {username: username, password: password};
    axios.post("http://localhost:3035/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        navigate('/pages/home')
      }
    });
  };

  return (
    <div className="loginContainer">
    <label>Username:</label>
    <input type="text" onChange={(event) => { setUsername(event.target.value); }}/>

    <label>Password:</label>
    <input type="password" onChange={(event) => { setPassword(event.target.value); }}/>

    <button onClick={login}>Login</button>
    <Link to="/registration" className="loginContainer" style={{ padding: 5 }}><button>Register New Account </button></Link>
    </div>
  );
}

export default Login;