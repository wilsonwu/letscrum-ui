import React from "react";
import { Navbar, Container, Breadcrumb, Form } from 'react-bootstrap';
// import { UserMenu } from "../UserMenu";

export const Header = () => {
  return (
    <Navbar style={{ padding: 0 }}>
      <Container style={{ margin: 0 }} fluid>
        <Navbar.Brand href="#home">LetScrum</Navbar.Brand>
        <Breadcrumb as="ol" style={{ margin: 0, paddingTop: "14px", fontSize: "14px", fontWeight: "400" }}>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 border-dark rounded-0"
              aria-label="Search"
              style={{ width: "12rem", height: "2rem", fontSize: ".8rem" }}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Navbar.Text>
            <a href="#login" style={{ textDecoration: "none", color: "grey" }}>Log in</a>
          </Navbar.Text>
        </Navbar.Collapse>
        {/* <UserMenu /> */}
      </Container>
    </Navbar>


  );
}
