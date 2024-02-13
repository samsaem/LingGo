import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="AmericanIPAChart"
          href="https://hlw.id.ucsb.edu/toolkit/ipaTable/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          American IPA Chart
        </a>
      </header>
    </div>
  );
}

export default App;
