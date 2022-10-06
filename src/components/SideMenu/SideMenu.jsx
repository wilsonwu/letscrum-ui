import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar variant="light" style={{backgroundColor: "rgb(234, 234, 234)"}}>
        <Container>
          <Nav className="me-auto flex-column" >
            <Nav.Link onClick={ () => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={ () => navigate("/projectList")}>Projects List</Nav.Link>
            <Nav.Link onClick={ () => navigate("/projectName")}>Project Summary</Nav.Link>
            <Nav.Link onClick={ () => navigate("/projectName/workitemList")}>Work Items List</Nav.Link>
            <Nav.Link onClick={ () => navigate("/projectName/create/Bug")}>Create Bug</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}