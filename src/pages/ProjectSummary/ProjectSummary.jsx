import React, { useState, useRef } from "react";
import { Row, Col, Button, Card, Alert, Dropdown, Container, Modal, Form, Overlay, Stack } from "react-bootstrap";
import { Main } from "../../layouts";
import { useNavigate, Outlet } from "react-router-dom"
import './ProjectSummary.css'

export const ProjectSummary = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inviteShow, setInviteShow] = useState(false);
  const handleInviteClose = () => setInviteShow(false);
  const handleInviteShow = () => setInviteShow(true);
  const [memberInfoShow, setMemberInfo] = useState(false);
  const handleMemberInfoClose = () => setMemberInfo(false);
  const handleMemberInfoShow = () => setMemberInfo(true);
  const memberInfoTarget = useRef(null);
  return (
    <Main>
      <Container fluid>
        <Stack direction="horizontal" className="py-4">
          <div style={{ width: "48px", height: "48px", borderRadius: "3px", backgroundColor: "darkblue", margin: ".5rem 1rem" }}></div>
          <h2 style={{ width: "auto", fontWeight: "700", marginBottom: 0 }}>iMooGoo</h2>
          <Button className="projectVisibilityBtn ms-auto">Private</Button>
          <Button className="projectInviteBtn" onClick={handleInviteShow}>Invite</Button>
          <div style={{ width: "3rem", textAlign: "center" }}>icon</div>
        </Stack>
        <Row className="overviewContainer">
          <Col lg={8} md={12} className="px-0">
            {/* about */}
            <Card className="card">
              <Card.Body>
                <Stack direction="horizontal">
                  <Card.Title className="cardTitle">About this project</Card.Title>
                  <Button className="aboutEditBtn ms-auto me-0" onClick={handleShow}>0</Button>
                </Stack>
                <Card.Subtitle className="cardSubtitle">item.projectName</Card.Subtitle>
                <Alert variant="danger" className="cardAlert">
                  <h6 style={{ color: "var(--text-color-warning)" }}>We could not find Readme.md</h6>
                  <p style={{ color: "var(--text-color-primary)", marginBottom: 0 }}>Seems like the file has not been created or was deleted</p>
                </Alert>
              </Card.Body>
            </Card>
          </Col>
          <Col id="summaryRightColumn" lg={4} md={12} className="pe-0">
            {/* stats */}
            <Card className="card">
              <Card.Body>
                <Stack direction="horizontal">
                  <Card.Title className="cardTitle">Project stats</Card.Title>
                  <Dropdown className="periodSwitch ms-auto">
                    <Dropdown.Toggle className="periodToggle">
                      Period: Last 7 days
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="stateDropDownMenu">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Stack>
                <Card.Subtitle className="cardSubtitle">Boards</Card.Subtitle>
                <Row>
                  <Col>
                    <Row onClick={() => navigate("/workitemList")} >
                      <Col sm={4}>
                        123
                        {/* <div style={{ width: "32px", hight: "32px", backgroundColor: "red" }}></div> */}
                      </Col>
                      <Col sm={8} >
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
                <Card.Title className="cardTitle">
                  Members
                  <div className="memberCount">6</div>
                </Card.Title>
                <div
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "darkblue", margin: ".625rem .2rem 0 0 "
                  }}
                  ref={memberInfoTarget}
                  onMouseEnter={handleMemberInfoShow}
                  onMouseLeave={handleMemberInfoClose}
                />
                <Overlay target={memberInfoTarget} show={memberInfoShow} placement="right" >
                  {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                      {...props}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        backgroundColor: 'rgba(255, 100, 100, 0.85)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        // ...props.style
                      }}
                    >123</div>
                  )}
                </Overlay>

              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* edit about */}
        <Modal
          show={show}
          fullscreen="md-down"
          onHide={handleClose}
          animation={false}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>About this project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="itemLabel">Description</Form.Label>
                <Form.Control type="email" className="itemInput" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="itemLabel">Tags</Form.Label>
                <div>
                  <Button className="addTagBtn">
                    Add tag
                  </Button>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" >

                <Form.Label className="itemLabel">About</Form.Label>
                <div style={{ fontSize: ".875rem", marginBottom: ".4rem" }}>
                  <Form.Check inline type="radio" label="Readme file" id="readme" />
                  <Form.Check inline type="radio" label="Wiki" id="wiki" />
                </div>
                <Dropdown >
                  <Dropdown.Toggle className="projectAboutRepo">
                    $/iMooGoo
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="stateDropDownMenu">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Alert variant="danger" className="cardAlert my-4">
                <h6 style={{ color: "var(--text-color-warning)" }}>
                  We could not find Readme.md</h6>
                <p style={{ color: "var(--text-color-primary)", marginBottom: 0 }}>
                  Seems like the file has not been created or was deleted</p>
              </Alert>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" className="cancelBtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="light" className="saveBtn" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        {/* invite */}
        <Modal
          show={inviteShow}
          fullscreen="md-down"
          onHide={handleInviteClose}
          animation={false}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>Invite members to iMooGoo
              <h6 className="modalSubtitle">Search and add users to your iMooGoo</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="itemLabel">Users</Form.Label>
                <Form.Control type="email" className="itemInput" placeholder="Use semicolons to separate multiple email address" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="itemLabel">Add to team{"("}s{")"}</Form.Label>
                <Dropdown >
                  <Dropdown.Toggle className="addToTeam">
                    iMooGoo Team
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="stateDropDownMenu">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" className="cancelBtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="light" className="saveBtn" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Outlet />
    </Main>
  )
}