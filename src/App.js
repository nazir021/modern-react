import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What Time Is It?
        </p>
        <a
          className="App-link"
          href="http://nazirahmed.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          {new Date().toLocaleDateString()}
        </a>
      </header>
    </div>
  );
}

export default App;
