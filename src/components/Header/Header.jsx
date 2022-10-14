import React, { useState } from "react";
import { Navbar, Container, Form, Nav, Button, Offcanvas } from 'react-bootstrap';
// import { BreadcrumbNav } from "../BreadcrumbNav";
// import { NavLink as BreadcrmbNavLink } from "react-router-dom";
import './Header.css'
// import { UserMenu } from "../UserMenu";
import { useDispatch } from 'react-redux'
import { signIn, signOff } from '../../redux/reducers/userSlice'
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../SideMenu";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // matchPath({ path: '/', end: false }, location.pathname);

  return (
    <Navbar className="navBar">
      <Container fluid className="navBarContainer">
        <Button variant="light" className="tabletHeaderBurger" onClick={handleShow}>Br</Button>
        <Offcanvas show={show} onHide={handleClose} style={{ width: "80%"}}>
          
          <Offcanvas.Body>
            123
            <SideMenu />
          </Offcanvas.Body>
        </Offcanvas>
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
