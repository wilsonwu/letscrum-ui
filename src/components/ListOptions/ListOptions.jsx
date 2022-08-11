import React from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";
import './ListOptions.css'

export const ListOption = () => {
  return (
    <>
      <Row>
        <Col sm={2} className="px-0">
          <Dropdown >
            <Dropdown.Toggle variant="black" className="listFaqOptions" style={{ fontSize: "14px", color: "#333", fontWeight: "600"}}>
              Recently updated
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-1" style={{ fontSize: "14px", color: "#333", fontWeight: "400"}}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={2} className="px-0">
          <Dropdown >
            <Dropdown.Toggle variant="black" className="listFaqOptions" style={{ fontSize: "14px", color: "#333", fontWeight: "400"}}>
              New Work Item
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-1" style={{ fontSize: "14px", color: "#333", fontWeight: "400"}}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={6} className="px-0">
          <Button variant="light" className="listOptionsBtn">Open in Queries</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Column Options</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Import Work Items</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Recycle Bin</Button>{' '}
        </Col>
        <Col sm={2} className="px-0">
          <Button variant="light" className="listOptionsBtn">Ops</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Flt</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Mod</Button>{' '}
        </Col>
      </Row>
      <Row className="py-2 px-0 me-2" >
          <div style={{backgroundColor: "rgb(240, 240, 240)", height: "1px" }}></div>
      </Row>
    </>
  )
}