import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Registration from './pages/registration';
import Login from './pages/login';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  // tracking if user logged in or not
  const [authState, setAuthState] = useState({
    username:"", id:0, status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3035/auth/", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({username: "", id:0, status: false});
  };

  return (
  <div className="App"> 
  <AuthContext.Provider value={{ authState, setAuthState }}>
    <Router>
    <div className="navbar">
      <Link to="/home" style={{ padding: 5 }}>LingGo</Link>
      <Link to="/about" style={{ padding: 5 }}>about</Link>
      <Link to="/contact" style={{ padding: 5 }}>contact </Link>
      { /* hides `login` when logged in` */
        !authState.status ? (
        <>
        <Link to="/login" style={{ padding: 5 }}>login </Link>
        </>
        ) : (
          /* `logout` available once logged in` */
          <button onClick={logout}>Logout</button>
      )}

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    </div>

    </Router>
    </AuthContext.Provider>
  </div>
)};

export default App;