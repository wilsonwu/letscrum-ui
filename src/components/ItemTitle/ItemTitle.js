import React from "react";
import { Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import './ItemTitle.css';

export const ItemTitle = () => {
  return (
    <>
      <Row className="py-2 px-0 me-2" >
        <div style={{ backgroundColor: "rgb(240, 240, 240)", height: "1px" }}></div>
      </Row>
      <Row >
        <Row>
          <Col sm={1} style={{ fontSize: "12px" }}>NEW BUG *</Col>
          <Col sm={11} style={{ fontSize: "14px", color: "red" }}>Field Title cannot be empty</Col>
        </Row>
        <Row style={{ paddingTop: ".5rem", paddingBottom: ".5rem"}}>
          <Col>
            <Form.Control placeholder="Enter titile" id="createItemTitle" />
          </Col>
        </Row>
        <Row style={{ paddingBottom: ".5rem"}}>
          <Col sm={4}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="detailToggle">
                Unassigned
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={4} >
            <Button variant="link" style={{ fontSize: ".9rem", textDecoration: "none", color: "#333"}}>
              counted comments
            </Button>
            <Button id="addTagBtn">
              Add tag
            </Button>
          </Col>
          <Col sm={4}>
            <Button id="detailSaveBtn">save</Button>
            <Button className="hotDisableBtn">refresh</Button>
            <Button className="hotDisableBtn">Revent changes</Button>
            <Button className="hotBtn">Opts</Button>
          </Col>
        </Row>
      </Row>
    </>
  )
}