import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Kabaneri from "./Kabaneri";
import Todo from "./Todo";
import About from "./About";

function App() {

  return (
    <BrowserRouter>
      <nav style={{ margin: '1rem 0' }}>
        <Link to="/todo">Todo</Link> | {" "}
        <Link to="/kabaneri">Kabaneri</Link> | {" "}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Kabaneri />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/kabaneri" element={<Kabaneri />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
