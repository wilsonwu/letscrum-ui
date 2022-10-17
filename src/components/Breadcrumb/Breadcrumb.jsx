import React from "react";
import { Breadcrumb as HeaderBreadcrumb } from "react-bootstrap";
import "./Breadcrumb.css"
import routes from "../../Routes";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs)

  return (
    <HeaderBreadcrumb id="headerBreadcrumb">
      {
        breadcrumbs.map(({ match, breadcrumb }, index) => (
          // <HeaderBreadcrumb.Item key={index}>
          <NavLink
            className="breadcrumb"
            id="breadcrumbItem"
            key={index}
            to={match.pathname}
          >
            {breadcrumb}
          </NavLink>
          // </HeaderBreadcrumb.Item>
        ))
      }
    </HeaderBreadcrumb>
  )
}