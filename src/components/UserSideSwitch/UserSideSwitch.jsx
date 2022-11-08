import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const UserSideSwitch = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName)
  return (
    <>
      <Navbar variant="light" style={{backgroundColor: "rgb(234, 234, 234)"}}>
        <Container>
          <Nav className="me-auto flex-column" >
            <Nav.Link onClick={ () => navigate("/")}>{userName}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}