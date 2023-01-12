import "./App.css";
import { Form, Nav } from "./components";

function App() {
  return (
    <div className="app flex items-center flex-col  px-4">
      <Nav />
      <Form />
      <footer>
        Copyright © {new Date().getFullYear()} | Pretty Caption. | Made with ❤️
        By Vishal
      </footer>
    </div>
  );
}

export default App;
