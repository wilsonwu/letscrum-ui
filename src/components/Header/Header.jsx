import React, { useState } from "react";
import { Navbar, Container, Form, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Breadcrumb } from "../Breadcrumb";
import './Header.css'
import { useDispatch } from 'react-redux'
import { signIn, signOff } from '../../redux/reducers/userSlice'
import { useNavigate, NavLink } from "react-router-dom";


export const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const handleSideMenuClose = () => setShowSideMenu(false);
  const handleSideMenuShow = () => setShowSideMenu(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <Navbar className="navBar">
      <Container fluid className="navBarContainer">
        <Button variant="light" className="tabletHeaderBurger" onClick={handleSideMenuShow}>Br</Button>
        <Offcanvas show={showSideMenu} onHide={handleSideMenuClose} style={{ width: "80%" }}>
          <Offcanvas.Body style={{ backgroundColor: "var(--bg-color-primary)" }}>
            <ul className="mobileSideMenu">
              {menuItems.map((item, index) => (
                <li key={index} className="menuItemContainer">
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
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand onClick={() => navigate("/")}>LetScrum</Navbar.Brand>
        <Breadcrumb />
        <Navbar.Collapse id="desktopHeader" className="justify-content-end" >
          {/* search input */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 searchInput"
              aria-label="Search"
            />
          </Form>
          {/* nav menu */}
          <Nav>
            <Nav.Link
              onClick={() => dispatch(signIn({ userId: 1, username: "123" }))}
              className="logText">
              Log in
            </Nav.Link>
            <Nav.Link
              onClick={() => dispatch(signOff())}
              className="logText">
              Log off
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <UserMenu /> */}
      </Container>
    </Navbar>
  );
}
