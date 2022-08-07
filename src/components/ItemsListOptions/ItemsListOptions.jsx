import React from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";

export const ItemsListOption = () => {
  return (
    <Row>
      <Col sm={2} className="px-0">
        <Dropdown>
          <Dropdown.Toggle variant="black" className="rounded-0">
            Recently updated
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col sm={2} className="px-0">
        <Dropdown>
          <Dropdown.Toggle variant="black" className="rounded-0">
            New Work Item
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col sm={6} className="px-0">
        <Button variant="light" className="rounded-0">Open in Queries</Button>{' '}
        <Button variant="light" className="rounded-0">Column Options</Button>{' '}
        <Button variant="light" className="rounded-0">Import Work Items</Button>{' '}
        <Button variant="light" className="rounded-0">Recycle Bin</Button>{' '}
      </Col>
      <Col sm={2} className="px-0">
        <Button variant="light" className="rounded-0">Ops</Button>{' '}
        <Button variant="light" className="rounded-0">Flt</Button>{' '}
        <Button variant="light" className="rounded-0">Mod</Button>{' '}
      </Col>
    </Row>
  )
}