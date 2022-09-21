import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const UserSideSwitch = () => {
  return (
    <>
      <Navbar variant="light" style={{backgroundColor: "rgb(234, 234, 234)"}}>
        <Container>
          <Nav className="me-auto flex-column" >
            <Nav.Link href="#home">wilsonwu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}