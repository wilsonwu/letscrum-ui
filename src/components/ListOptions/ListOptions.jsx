import React from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";
import './ListOptions.css'
import '../../index.css'

export const ListOption = () => {
  return (
    <Row className="justify-content-between">
      <Col sm={9}>
        <Row>
          <Dropdown style={{ padding: 0, width: "auto" }}>
            <Dropdown.Toggle variant="black" className="listFaqOptions" style={{ fontWeight: "600" }}>
              Recently updated
            </Dropdown.Toggle>
            <Dropdown.Menu className="listFaqMenu">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{ padding: 0, width: "auto" }}>
            <Dropdown.Toggle variant="black" className="listFaqOptions" style={{ fontWeight: "400" }}>
              New Work Item
            </Dropdown.Toggle>
            <Dropdown.Menu className="rounded-1 listFaqMenu">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="light" className="listOptionsBtn">Open in Queries</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Column Options</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Import Work Items</Button>{' '}
          <Button variant="light" className="listOptionsBtn">Recycle Bin</Button>{' '}
        </Row>
      </Col>
      <Col sm={3} style={{ width: "auto" }}>
        <Row>
          <Button variant="light" className="listShortcutBtn">O</Button>
          <Button variant="light" className="listShortcutBtn">F</Button>
          <Button variant="light" className="listShortcutBtn">M</Button>
        </Row>
      </Col>
    </Row>


  )
}