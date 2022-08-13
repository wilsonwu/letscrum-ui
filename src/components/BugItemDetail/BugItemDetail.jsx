import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export const BugItemDetail = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          123
        </Tab>
        <Tab eventKey="profile" title="Profile">
          456
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          789
        </Tab>
      </Tabs>
    </>
  )
}