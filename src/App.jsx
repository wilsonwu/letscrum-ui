import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, WorkItemsPage, AboutPage, LogInPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/workItems" element={<WorkItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
