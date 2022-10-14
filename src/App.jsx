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
        {/* {routes.map((route, i) => {
          const { title, path, element, children } = route;
          return (
            <Route
              key={i}
              path={path}
              title={title}
              element={element}
            >
              {children.map(
                  (child, i) => {
                    const { childTitle, childPath, childElement } = child;
                    return (
                      <Route
                        key={i}
                        path={childPath}
                        title={childTitle}
                        element={childElement}
                      />
                    )
                  })}
              </Route>
          )})} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* need to add /userName and modify /projectName relevant stuff */}
        <Route path="/projectList" element={<ProjectList title="Projects List" />} />
        <Route path="/imoogoo" element={<ProjectSummary title="Summary" />} />
        <Route path="/projectName/workitemList" element={<WorkItemList title="Work items" />} />
        <Route path="/create/Bug" element={<CreateBug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
