import React from "react";
import { Row, Col } from 'react-bootstrap'
import { Header, Footer, SideMenu } from "../../components";
import PropTypes from "prop-types";

export const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Row>
        <Col sm={2} className="pe-0">
          <SideMenu />
        </Col>
        <Col sm={10}>
          {children}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}