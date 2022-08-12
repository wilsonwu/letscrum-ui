import React from "react";
import { Row, Col } from 'react-bootstrap';
import './ItemTitle.css';

export const ItemTitle = () => {
  return (
    <>
      <Row className="py-2 px-0 me-2" >
        <div style={{ backgroundColor: "rgb(240, 240, 240)", height: "1px" }}></div>
      </Row>
      <Row>
        <Row>
          <Col sm={1} style={{ fontSize: "12px"}}>NEW BUG *</Col>
          <Col sm={11} style={{ fontSize: "14px", color: "red"}}>Field Title cannot be empty</Col>
        </Row>
      </Row>
    </>
  )
}