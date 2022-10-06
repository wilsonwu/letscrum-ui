import React from "react";
import { Navbar, Container, Form, Nav, Button } from 'react-bootstrap';
// import { BreadcrumbNav } from "../BreadcrumbNav";
// import { NavLink as BreadcrmbNavLink } from "react-router-dom";
import './Header.css'
// import { UserMenu } from "../UserMenu";
import { useDispatch } from 'react-redux'
import { signIn, signOff } from '../../redux/reducers/userSlice'
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  matchPath({ path: '/', end: false }, location.pathname);

  return (
    <Navbar className="navBar">
      <Container fluid className="navBarContainer">
        <Button variant="light" className="tabletHeaderBurger">Br</Button>
        {/* <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id='offcanvasNavbarDropdown-expand-md'
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
        </Navbar.Offcanvas> */}
        <Navbar.Brand onClick={() => navigate("/")}>LetScrum</Navbar.Brand>
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
