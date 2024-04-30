import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./Projects";
import Navigation from "./Navigation";
import MainPage from "./MainPage";
import P from "./Text/P";

const App: FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <div
          style={{
            position: "fixed",
            bottom: "0px",
            left: "15px",
            fontSize: "1.5rem",
            color: "white",
            mixBlendMode: "difference",
          }}
        >
          <P>Work in progress</P>
        </div>
      </div>
    </Router>
  );
};

export default App;
