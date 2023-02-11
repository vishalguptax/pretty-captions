import "./App.css";
import { Form, Nav } from "./components";
import './components/stars.css'
function App() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="App flex items-center flex-col px-4">
        <Nav />
        <Form />
      </div>
      <footer className="text-xs sm:text-base">
        Copyright © {new Date().getFullYear()} | Pretty Captions | Made with ❤️
        by&nbsp;
        <a
          href="https://www.linkedin.com/in/vishalgupta26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishal Gupta
        </a>
      </footer>
    </>
  );
}

export default App;
