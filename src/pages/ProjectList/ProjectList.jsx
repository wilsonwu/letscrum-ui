import React, { useState } from "react";
import { ProjectCard } from "../../components";
import { Users } from "../../layouts"
import { Container, Row, Col, Button, Nav, Form, Modal, Dropdown } from 'react-bootstrap';
import "./ProjectList.css"

export const ProjectList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Users>
      <Container className="projectsContainer">
        <Row className="justify-content-between" style={{ paddingRight: "1rem" }}>
          <h2 className="userNameTitle" style={{ width: "auto" }}>wilsonwu</h2>
          <Button className="creatProjectBtn" style={{ width: "8rem", lineHeight: "2rem" }} onClick={handleShow}> + New project</Button>
        </Row>
        <Row style={{ paddingTop: "1rem", paddingBottom: "1rem" }} className="justify-content-between">
          <Nav
            activeKey="/projects"
            style={{ width: "70%" }}
          >
            <Nav.Item >
              <Nav.Link href="/projects" className="projectNav">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="projectNav">My work items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="projectNav">My pull requests</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form style={{ width: "30%" }}>
            <Form.Control
              type="search"
              placeholder="Filter by project"
              className="itemTableSearch"
              aria-label="Search"
              size="sm"
            />
          </Form>
        </Row>
        <Row>
          <ProjectCard />
          {/* ProjectCard arguments: projectId={1} projectName={test} projectDisplayName={TestProject} */}
        </Row>
        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="itemLabel">Email address</Form.Label>
                <Form.Control type="email" className="itemInput" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="itemLabel">Password</Form.Label>
                <Form.Control type="text" as="textarea" rows={3} className="itemInput" />
              </Form.Group>

              <Row style={{ marginBottom: ".5rem", padding: "0 1rem" }}>Visibility</Row>
              <Row style={{ padding: "0 1rem" }}>
                <Col className="projectVisibility" style={{ marginRight: "1rem" }}>
                  <Form>
                    <Row>
                      <Col>
                        <h6>Public</h6>
                        <p>Anyone on the internet can view the project. Certain features like
                          TFVC are not supported</p>
                      </Col>
                      <Col>
                        <Form.Check
                          type="radio"
                          reverse
                          id="public"
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col className="projectVisibility">
                  <Form>
                    <Row>
                      <Col>
                        <h6>Public</h6>
                        <p>Anyone on the internet can view the project. Certain features like
                          TFVC are not supported</p>
                      </Col>
                      <Col>
                        <Form.Check
                          type="radio"
                          reverse
                          id="public"
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>

              <Row style={{ marginBottom: ".5rem", padding: "1rem", fontSize: ".875rem" }}>
                By creating this project, you agree to the Azure DevOps code of conduct
              </Row>

              <Row style={{ padding: "0 1rem" }} >
                <Button className="advancedBtn">Advanced</Button>
              </Row>

              <Row style={{ padding: "1rem 0" }}>
                <Col style={{ padding: "0 1rem", fontSize: ".875rem" }}>
                  Version control
                  <Dropdown >
                    <Dropdown.Toggle className="projectAdvancedItem">
                      Git
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="stateDropDownMenu">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col style={{ padding: "0 1rem", fontSize: ".875rem" }}>
                  Work item process
                  <Dropdown >
                    <Dropdown.Toggle className="projectAdvancedItem">
                      Agile
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="stateDropDownMenu">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Users>
  );
}