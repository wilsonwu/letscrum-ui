import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, WorkItemList, About, Login, ProjectList, CreateBug, ProjectSummary } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projectList" element={<ProjectList />} />
        <Route path="/workitemList" element={<WorkItemList />} />
        <Route path="/create/Bug" element={<CreateBug />} />
        <Route path="/userName/projectName" element={<ProjectSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
