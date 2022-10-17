import React from "react";
import { Breadcrumb as HeaderBreadcrumb } from "react-bootstrap";
import "./Breadcrumb.css"
import routes from "../../Routes";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <HeaderBreadcrumb>
      
        {breadcrumbs.map(({ breadcrumb }, index) => (
          <HeaderBreadcrumb.Item key={index}>
            {breadcrumb}
          </HeaderBreadcrumb.Item>
        ))}
      
    </HeaderBreadcrumb>
  )
}

//     // <Breadcrumb as="ol" className="breadcrumb">
//     //   <Breadcrumb.Item>Home</Breadcrumb.Item>
//     //   <Breadcrumb.Item>Library</Breadcrumb.Item>
//     //   <Breadcrumb.Item>Data</Breadcrumb.Item>
//     // </Breadcrumb>