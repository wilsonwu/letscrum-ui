import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import { Header, Footer, UserSideSwitch } from "../../components";
import PropTypes from "prop-types";

export const Users = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid>
      <Row>
        <Col sm={2} className="px-0">
          <UserSideSwitch />
        </Col>
        <Col sm={10} className="px-0">
          {children}
        </Col>
      </Row>
      <Footer />
      </Container>
    </>
  )
}

Users.propTypes = {
  children: PropTypes.node.isRequired
}