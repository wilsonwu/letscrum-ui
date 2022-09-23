import React from "react";
import { Row, Col, Button, Card, Alert, Dropdown, Container } from "react-bootstrap";
import { Main } from "../../layouts";
import './ProjectSummary.css'

export const ProjectSummary = () => {
  return (
    <Main>
      <Container>
        <Row style={{ padding: "1rem" }}>
          <Col sm={8}>
            <Row className="align-items-center">
              <div style={{ width: "48px", height: "48px", borderRadius: "3px", backgroundColor: "darkblue", margin: ".5rem 1rem" }}></div>
              <h2 style={{ width: "auto", fontWeight: "700", marginBottom: 0 }}>iMooGoo</h2>
            </Row>
          </Col>
          <Col sm={4}>
            <Row className="justify-content-end">
              <Button className="projectVisibilityBtn">Private</Button>
              <Button className="projectInviteBtn">Invite</Button>
              <div style={{ width: "3rem" }}>icon</div>
            </Row>
          </Col>
        </Row>
        <Row className="overviewContainer">
          <Col sm={8}>
            {/* about */}
            <Card className="card">
              <Card.Body>
                <Row className="justify-content-between">
                  <Card.Title className="cardTitle">About this project</Card.Title>
                  <Button className="aboutEditBtn">0</Button>
                </Row>
                <Card.Subtitle className="cardSubtitle">item.projectName</Card.Subtitle>
                <Alert variant="danger" className="cardAlert">
                  <h6 style={{ color: "var(--text-color-warning)" }}>We could not find Readme.md</h6>
                  <p style={{ color: "var(--text-color-primary)", marginBottom: 0 }}>Seems like the file has not been created or was deleted</p>
                </Alert>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            {/* stats */}
            <Card className="card">
              <Card.Body>
                <Row className="justify-content-between">
                  <Card.Title className="cardTitle">Project stats</Card.Title>
                  <Dropdown className="periodSwitch">
                    <Dropdown.Toggle className="periodToggle">
                      Period: Last 7 days
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="stateDropDownMenu">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
                <Card.Subtitle className="cardSubtitle">Boards</Card.Subtitle>
                <Row>
                  <Col>
                    <Row>
                      <Col sm={4}>
                        123
                        {/* <div style={{ width: "32px", hight: "32px", backgroundColor: "red" }}></div> */}
                      </Col>
                      <Col sm={8}>
                        <p style={{ marginBottom: 0 }}>0</p>
                        <p style={{ fontSize: ".8rem", color: "var(--text-color-secondary)", marginBottom: 0 }}>Work items created</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col sm={4}>
                        123
                        {/* <div style={{ width: "32px", hight: "32px", backgroundColor: "red" }}></div> */}
                      </Col>
                      <Col sm={8}>
                        <p style={{ marginBottom: 0 }}>0</p>
                        <p style={{ fontSize: ".8rem", color: "var(--text-color-secondary)", marginBottom: 0 }}>Work items created</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* members */}
            <Card className="card" style={{ marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title className="cardTitle">Members</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Main>
  )
}