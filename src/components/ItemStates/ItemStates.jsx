import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import "./ItemStates.css"

export const ItemStates = () => {
  return (
    <>
      <Row style={{ backgroundColor: "rgb(248, 248, 248)", paddingTop: "1rem", paddingBottom: "1rem", borderTop: "1px solid rgb(234, 234, 234)", borderBottom: "1px solid rgb(234, 234, 234)" }}>
        <Row >
          <Col sm={3}>
            <Row style={{ paddingLeft: "1rem"}}>
              <Col sm={3} className="stateTitle">State</Col>
              <Col sm={9}>
                <Dropdown >
                  <Dropdown.Toggle className="stateToggle">
                    To Do
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <Row>
              <Col className="stateTitle" sm={3}>Area</Col>
              <Col sm={9}>
                <Dropdown>
                  <Dropdown.Toggle className="stateToggle">
                    iMooGoo
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Row>
              <Col className="stateTitle" sm={3}>Reason</Col>
              <Col sm={9}>
                <Dropdown>
                  <Dropdown.Toggle className="stateToggle">
                    New task
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col sm={9}>
            <Row>
              <Col className="stateTitle" sm={3}>Iteration</Col>
              <Col sm={9}>
                <Dropdown>
                  <Dropdown.Toggle className="stateToggle">
                    iMooGoo\Release 1\Sprint 1
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  )
}