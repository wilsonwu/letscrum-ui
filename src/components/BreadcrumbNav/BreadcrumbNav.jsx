import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./BreadcrumbNav.css"
import routes from "../../Routes";
import { useLocation, useRoutes, Link, matchPath } from "react-router-dom";
import PropTypes from "prop-types";

const MatchRouteDefinitions = ( definitions, locationPathname, parentPath) => {
  const crumbs = [];
  const location = useLocation();
  // const pathPatternWithParent = joinPaths([parentPath, definition.path]);
  definitions.forEach((definition) => {
    const match = matchPath(
      { path: joinPaths([parentPath, definition.path]), end: false },
      location.pathname
    );
    if(match) {
      crumbs.push(match);
      if(definition.children) {
        const nestedMatches = MatchRouteDefinitions(
          definition.children,
          locationPathname,
          joinPaths([parentPath, definition.path])
        );
        crumbs.push(...nestedMatches);
      }
    }
  });
  return crumbs;
}



const joinPaths = (paths) => {
  return paths.join("/").replace(/\/\/+/g, "/");
}

const useActiveRoutePaths = (routes) => {
  const location = useLocation();
  const activeRoutePaths = MatchRouteDefinitions (routes, location.pathname);
  return activeRoutePaths;
}

const Breadcrumbs = ({routes}) => {
  const activeRoutePaths = useActiveRoutePaths(routes);
  return (
    <>
    {activeRoutePaths.map((active, index, {length}) => (
      <Breadcrumb key={index}>
        {index === 0 ? "" : ">"}
        {index !== length-1 ? (
          <Link to={active.match.pathname}>{active.title}</Link>
        ) : (
          <>{active.title}</>
        )}
      </Breadcrumb>
    ))}
    </>
  )
}

export const BreadcrumbNav = () => {
  const routesToRender = useRoutes(routes);
  return (
    <>
    <Breadcrumbs routes={routes} />
      {routesToRender}
    </>
    // <Breadcrumb as="ol" className="breadcrumb">
    //   <Breadcrumb.Item>Home</Breadcrumb.Item>
    //   <Breadcrumb.Item>Library</Breadcrumb.Item>
    //   <Breadcrumb.Item>Data</Breadcrumb.Item>
    // </Breadcrumb>
  )
}

Breadcrumbs.propTypes = {
  routes: PropTypes.array.isRequired
}