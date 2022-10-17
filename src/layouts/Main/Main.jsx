import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import { Header, Footer, SideMenu } from "../../components";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row >
          <Col md={2} className="px-0">
            <SideMenu />
          </Col>
          <Col sm={12} md={10} className="px-0">
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}