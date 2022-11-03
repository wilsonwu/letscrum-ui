import React from "react";
import { Home, WorkItemList, About, Login, ProjectList, CreateBug, ProjectSummary } from "./pages";

const routes = [
  {
    path: "/",
    element: <Home />,
    breadcrumb: "Home"
  },
  {
    path: "/about",
    element: <About />,
    breadcrumb: "About"
  },
  {
    path: "/login",
    element: <Login />,
    breadcrumb: "LogIn"
  },
  {
    path: "/projects/?page=:currentPage",
    element: <ProjectList />,
    breadcrumb: "Project List"
  },
  {
    path: "/imoogoo",
    element: <ProjectSummary withOutlet />,
    breadcrumb: "Summary"
  },
  {
    path: "/projectName/workitemList",
    element: <WorkItemList />,
    breadcrumb: "Work Items"
  },
  {
    path: "create/bug",
    element: <CreateBug />,
    breadcrumb: "Create Bug"
  }
]

export default routes;