import React from "react";
import { Tabs, Tab, Row, Col, InputGroup, Form, Dropdown, Button } from "react-bootstrap";
import "./BugItemDetail.css"

export const BugItemDetail = () => {
  return (
    <Row>
      <Tabs
        defaultActiveKey="details"
        className="mb-3 detailTabs"
      >
        <Tab eventKey="details" title="Details" className="detailTab">
          <Row>
            <Col sm={6}>
              <Form.Label className="detailItemTitle">
                Repro Steps
              </Form.Label>
              <div className="detailItemDivider"></div>
              <InputGroup>
                <Form.Control className="detailInputPH" placeholder="Click to add Repro Steps" />
              </InputGroup>

              <Form.Label className="detailItemTitle">
                System Info
              </Form.Label>
              <div className="detailItemDivider"></div>
              <InputGroup>
                <Form.Control className="detailInputPH" placeholder="Click to add System Info" />
              </InputGroup>

              <Form.Label className="detailItemTitle">
                Acceptance Criteria
              </Form.Label>
              <div className="detailItemDivider"></div>
              <InputGroup>
                <Form.Control className="detailInputPH" placeholder="Click to add Acceptance Criteria" />
              </InputGroup>

              <Form.Label className="detailItemTitle">
                Discussion
              </Form.Label>
              <div className="detailItemDivider"></div>
              <InputGroup>
                <Form.Control className="detailInputPH" placeholder="Click to add Acceptance Criteria" />
              </InputGroup>
            </Col>

            <Col sm={3}>

              <Form.Label className="detailItemTitle">
                Details
              </Form.Label>
              <div className="detailItemDivider"></div>
              <div>
                <Form.Label className="detailTitle">
                  Priority
                </Form.Label>
                <Dropdown >
                  <Dropdown.Toggle className="detailToggle">
                    2
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="detailDropDownMenu">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Severity
                </Form.Label>
                <Dropdown >
                  <Dropdown.Toggle className="detailToggle">
                    3 - Medium
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="detailDropDownMenu">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Effort
                </Form.Label>
                <InputGroup>
                  <Form.Control className="detailInput" />
                </InputGroup>
              </div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Remaining Work
                </Form.Label>
                <InputGroup>
                  <Form.Control className="detailInput" />
                </InputGroup>
              </div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Activity
                </Form.Label>
                <InputGroup>
                  <Form.Control className="detailInput" />
                </InputGroup>
              </div>


              <Form.Label className="detailItemTitle">
                Build
              </Form.Label>
              <div className="detailItemDivider"></div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Found in Build
                </Form.Label>
                <Dropdown.Toggle className="detailToggle">
                </Dropdown.Toggle>
                <Dropdown.Menu className="detailDropDownMenu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
              </div>
              <div className="detailItem">
                <Form.Label className="detailTitle">
                  Intergrated in Build
                </Form.Label>
                <Dropdown.Toggle className="detailToggle">
                </Dropdown.Toggle>
                <Dropdown.Menu className="detailDropDownMenu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Col>

            <Col sm={3}>
              <Form.Label className="detailItemTitle">
                Deployment
              </Form.Label>
              <div className="detailItemDivider"></div>
              <div className="detailPanel">
                <p className="detailPanelText">
                  To track releases associated with this work item,
                  go to Releases and turn on deployment status reporting for Boards in your pipeline&apos;s
                  Options menu. Learn more about deployment status reporting
                </p></div>
              <div className="detailItem">
                <Form.Label className="detailItemTitle">
                  Development
                </Form.Label>
                <div className="detailItemDivider"></div>
                <Button variant="link" className="detailLinkBtn">+ Add link</Button>
              </div>

              <div className="detailItem">
                <Form.Label className="detailItemTitle">
                  Related Work
                </Form.Label>
                <div className="detailItemDivider"></div>
                <Dropdown.Toggle className="detailLinkToggle">+ Add Link
                </Dropdown.Toggle>
                <Dropdown.Menu className="detailDropDownMenu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
                <div className="detailPanel">
                  <p className="detailPanelText">
                    Add an existing work item as a paarent
                  </p></div>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="profile" title="Profile" >
          456
        </Tab>
        <Tab eventKey="contact" title="Contact">
          789
        </Tab>
      </Tabs>
    </Row>
  )
}