import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const UserSideSwitch = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar variant="light" style={{backgroundColor: "rgb(234, 234, 234)"}}>
        <Container>
          <Nav className="me-auto flex-column" >
            <Nav.Link onClick={ () => navigate("/")}>wilsonwu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}