import React from "react";
import { Tabs, Tab, Row, Col, InputGroup, Form } from "react-bootstrap";
import "./BugItemDetail.css"

export const BugItemDetail = () => {
  return (
    <Row>
      <Tabs
        defaultActiveKey="details"
        className="mb-3 "
        id="detailTabs"
      >
        <Tab eventKey="details" title="Details" id="detailsTab">
          <Row>
            <Col sm={6}>
              <Form.Label style={{ fontSize: "1rem", fontWeight: "600", paddingBottom: "6px" }}>
                Repro Steps
              </Form.Label>
              <div style={{ height: "1px", width: "100%", backgroundColor: "rgb(234, 234, 234)" }}></div>
              <InputGroup style={{ margin: "6px 0 6px 0" }}>
                <Form.Control style={{ border: "none", borderRadius: 0 }} placeholder="Click to add Repro Steps" />
              </InputGroup>
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