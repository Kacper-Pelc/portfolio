import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./Components/container";
import Firstpage from './Components/FirstPage/firstpage';
import Twopage from './Components/Twopage/twopage';
import Threepage from "./Components/Threepage/threepage";
import Error from "./Components/Error/error";
import Fourpage from "./Components/Fourpage/fourpage";
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
        <Container />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Firstpage />} />
          <Route path="/skills" element={<Twopage />} />
          <Route path="/projects" element={<Threepage />} />
          <Route path="/contact" element={<Fourpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
