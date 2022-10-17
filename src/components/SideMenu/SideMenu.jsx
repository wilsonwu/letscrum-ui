import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import "./SideMenu.css"

export const SideMenu = () => {
  const menuItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Projects List",
      path: "/projectsList"
    },
    {
      title: "Project Summary",
      path: "/imoogoo"
    },
    {
      title: "Work Items List",
      path: "/projectName/workitemList"
    },
    {
      title: "Create Bug",
      path: "/create/Bug"
    }
  ]
  return (
    <>
      <Navbar variant="light" className='sideMenu'>
        <Container fluid>
          <Nav className="me-auto flex-column" >
            {menuItems.map((item, index) => (
              <Nav.Link key={index}>
                <NavLink
                  to={item.path}
                  className="menuItem"
                  style={({ isActive }) =>
                  ({
                    color: isActive ? "var(--text-color-primary)" : "",
                    fontWeight: isActive ? "bold" : ""
                  })}
                >
                  {item.title}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}