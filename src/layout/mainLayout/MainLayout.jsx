import React from "react";
import { Row, Col } from 'react-bootstrap'
import { Header, Footer, SideMenu } from "../../components";
import PropTypes from "prop-types";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <SideMenu />
        </Col>
        <Col md={10}>
          {children}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}