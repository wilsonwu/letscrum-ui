import React from "react";
import { Tabs, Tab, Row } from "react-bootstrap";
import "./BugItemDetail.css"

export const BugItemDetail = () => {
  return (
    <Row>
      <Tabs
        defaultActiveKey="profile"
        className="mb-3 "
      >
        <Tab eventKey="home" title="Home" >
          123
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