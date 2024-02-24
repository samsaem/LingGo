import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Authenticate from './pages/authenticate';
import Registration from './pages/registration';
import Login from './pages/login';


function App() {
  return (
  <div className="App"> 
    <Router>
    <nav style ={{ margin: 10 }}>
      <Link to="" style={{ padding: 5 }}>LingGo</Link>
      <Link to="/about" style={{ padding: 5 }}>about</Link>
      <Link to="/contact" style={{ padding: 5 }}>contact </Link>
      <Link to="/login" style={{ padding: 5 }}>login </Link>
      <Link to="/registration" style={{ padding: 5 }}>registration </Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>

    </Router>
  </div>
)};

export default App;