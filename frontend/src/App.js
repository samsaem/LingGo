import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Registration from './pages/registration';
import Login from './pages/login';
//import { AuthContext } from './helpers/AuthContext';
//import { useState, useEffect } from "react";

function App() {
  // tracking if user logged in or not
  //const [authState, setAuthState] = useState(false);

  return (
  <div className="App"> 
    <Router>
    <nav style ={{ margin: 10 }}>
      <Link to="/home" style={{ padding: 5 }}>LingGo</Link>
      <Link to="/about" style={{ padding: 5 }}>about</Link>
      <Link to="/contact" style={{ padding: 5 }}>contact </Link>
      { /* hides `login` when logged in` */
        !localStorage.getItem('accessToken') && (
        <>
        <Link to="/login" style={{ padding: 5 }}>login </Link>
        </>
      )}
    </nav>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>

    </Router>
  </div>
)};

export default App;