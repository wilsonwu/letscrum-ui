import React, { useState } from "react";
import { ProjectCard } from "../../components";
import { Project } from "../../layouts"
import { Container, Row, Col, Stack, Button, Nav, Form, Modal, Dropdown } from 'react-bootstrap';
import "./ProjectList.css"

export const ProjectList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Project>
      <Container className="projectsContainer" fluid>
        <Stack direction="horizontal">
        <h2 className="userNameTitle">wilsonwu</h2>
          <Button
            className="createProjectBtn ms-auto"
            onClick={handleShow}>
            + New project
          </Button>
        </Stack>
        {/* category tab */}
        <Row style={{ paddingTop: "1rem", paddingBottom: "1rem" }} className="justify-content-between">
        <Col style={{ padding: 0 }} md={12} lg={8}>
            <Nav activeKey="/projects">
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
          </Col>
          <Col md={12} lg={3}>
            <Form>
              <Form.Control
                type="search"
                placeholder="Filter by project"
                className="itemTableSearch"
                aria-label="Search"
                size="sm"
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={12}>
            {/* ProjectCard arguments: projectId={1} projectName={test} projectDisplayName={TestProject} */}
            <ProjectCard />
          </Col>
        </Row>
        {/* create project */}
        <Modal
          show={show}
          fullscreen='md-down'
          onHide={handleClose}
          animation={false}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>Create new project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="itemLabel">Project name</Form.Label>
                <Form.Control type="text" className="itemInput" style={{ height: "1.75rem" }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="itemLabel">Description</Form.Label>
                <Form.Control type="text" as="textarea" rows={3} className="itemInput" />
              </Form.Group>

              <Row style={{ marginBottom: ".5rem", padding: "0 1rem" }}>Visibility</Row>
              <Row style={{ padding: "0 1rem", display: "inline-flex" }}>
                <Col md={12} lg
                  className="projectVisibility" style={{ marginRight: "1rem", marginBottom: "1rem" }}>
                  <Form>
                    <Row>
                      <Col >
                        <h6 className="visibilityTitle">Public</h6>
                        <p className="visibilityDescription">Anyone on the internet can view the project. Certain features like
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
                <Col md={12} lg className="projectVisibility"  style={{marginBottom: "1rem"}}>
                  <Form>
                    <Row>
                      <Col>
                        <h6 className="visibilityTitle">Public</h6>
                        <p className="visibilityDescription">Anyone on the internet can view the project. Certain features like
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

              <Row style={{ padding: "1rem 0"}} >
                <Col md={12} lg={6} style={{ padding: "0 1rem", fontSize: ".875rem", marginBottom: "1rem" }}>
                  Version control
                  <Dropdown>
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
                <Col md={12} lg={6} style={{ padding: "0 1rem", fontSize: ".875rem" }}>
                  Work item process
                  <Dropdown>
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
            <Button variant="light" style={{ backgroundColor: "var(--bg-color-basic)", borderRadius: 0 }} onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="light" style={{ color: "var(--text-color-disabled)", backgroundColor: "var(--bg-color-basic)", borderRadius: 0 }} onClick={handleClose}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Project>
  );
}