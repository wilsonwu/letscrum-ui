import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, WorkItemList, About, Login, ProjectList, CreateBug, ProjectSummary } from "./pages";
// import routes from "./Routes"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* need to add /userName and modify /projectName relevant stuff */}
        <Route path="/projects/" element={<ProjectList title="Projects List" />} />
        <Route path="/projects/?page=:currentPage" element={<ProjectList title="Projects List" />} />
        <Route path="/imoogoo" element={<ProjectSummary title="Summary" />} />
        <Route path="/projectName/workitemList" element={<WorkItemList title="Work items" />} />
        <Route path="/create/Bug" element={<CreateBug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
