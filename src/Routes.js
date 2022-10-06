import React from "react";
import { Home, WorkItemList, About, Login, ProjectList, CreateBug, ProjectSummary } from "./pages";

const routes = [
  {
    title: "Home",
    path: "/",
    element: <Home />,

  },
  {
    title: "About",
    path: "/about",
    element: <About />,

  },
  {
    title: "LogIn",
    path: "/login",
    element: <Login />,

  },
  {
    title: "Projects List",
    path: "/projectList",
    element: <ProjectList />
  },
  {
    title: "Summary",
    path: "/projectName",
    element: <ProjectSummary withOutlet />,
    children: [
      {
        title: "Work Items",
        path: "workitemList",
        element: <WorkItemList />
      },
      {
        title: "Create Bug",
        path: "create/bug",
        element: <CreateBug />
      }
    ]
  }
]

export default routes;