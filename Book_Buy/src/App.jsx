import "./App.css";
import Register from "./Components/Register";
import Searchpage from "./Components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Searchpage/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
