import logo from './logo.svg';
import './App.css';
// src/App.js
import Comp from './compnent/comp'; // Default import
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello  </h1>
      <Comp />
    </div>
  );
}

export default App;

/* 
create folder in src/component/comp.js
import newly created file in app.js
deploy code on github
then live that code
*/
