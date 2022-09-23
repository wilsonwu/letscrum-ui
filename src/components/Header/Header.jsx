import React from "react";
import { Navbar, Container, Breadcrumb, Form, NavLink } from 'react-bootstrap';
import './Header.css'
import { UserMenu } from "../UserMenu";
import { useDispatch } from 'react-redux'
import { signIn, signOff } from '../../redux/reducers/userSlice'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <Navbar style={{ padding: 0, borderBottom: "1px solid rgb(240, 240, 240)" }}>
      <Container fluid>
        <Navbar.Brand href="#home">LetScrum</Navbar.Brand>
        <Breadcrumb as="ol" style={{ margin: 0, paddingTop: "14px", fontSize: "14px", fontWeight: "400" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 searchInput"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Navbar.Text>
            <NavLink onClick={
              () => dispatch(signIn({ userId: 1, username: "123" }))
            }
              style={
                { textDecoration: "none", color: "grey" }
              }>
              Log in
            </NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink onClick={
              () => dispatch(signOff())
            }
              style={
                { textDecoration: "none", color: "grey" }
              }>Logoff</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
        <UserMenu />
      </Container>
    </Navbar>
  );
}
