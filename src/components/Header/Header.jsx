import React, { useState } from "react";
import { Navbar, Container, Form, Nav, Button, Offcanvas } from 'react-bootstrap';
// import { Breadcrumb } from "../Breadcrumb";
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { signOff } from '../../redux/reducers/userSlice'
import { useNavigate, NavLink } from "react-router-dom";


export const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const handleSideMenuClose = () => setShowSideMenu(false);
  const handleSideMenuShow = () => setShowSideMenu(true);
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Projects List",
      path: "/project/:currentPage/:theSize"
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
        {/* <Breadcrumb /> */}
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
            {
              userName ?
                <Nav.Link className="logText" onClick={() => dispatch(signOff())}>Hi {userName} Log off </Nav.Link>
                // <span>userName is fullfilled{console.log("userName is fullfilled", userName)}</span>
                :
                //  <span>userName is null {console.log("userName is null")}</span>
                <Nav.Link className="logText" onClick={() => navigate("/login")}>Log in</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        {/* <UserMenu /> */}
      </Container>
    </Navbar>
  );
}
