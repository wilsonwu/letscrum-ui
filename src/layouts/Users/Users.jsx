import React from "react";
import { Row, Col } from 'react-bootstrap'
import { Header, Footer, UserSideSwitch } from "../../components";
import PropTypes from "prop-types";

export const Users = ({ children }) => {
  return (
    <>
      <Header />
      <Row>
        <Col sm={2} className="pe-0">
          <UserSideSwitch />
        </Col>
        <Col sm={10} className="px-0">
          {children}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Users.propTypes = {
  children: PropTypes.node.isRequired
}