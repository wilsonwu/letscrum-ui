import React from "react";
import { Row, Col } from 'react-bootstrap'
import { ItemStates, ItemTitle, BugItemDetail } from "../../components";
import { Main } from "../../layouts/Main";

export const CreateBug = () => {
  return (
    <Main>
      <Row>
        <Col sm={2}>
          <h5 className="py-3 mb-0 mt-1" style={{ fontWeight: "300" }}>Work Items</h5>
        </Col>

        <Col sm={10}>
          <Row>
            <Col sm={2}>
              <div style={{ backgroundColor: "#333", width: "1px", padding: "0" }}>
              </div>
              </Col>
            <Col sm={10}>
              <h6 className="py-3 mb-0 mt-2" style={{ fontWeight: "300" }}>Back to Work Items</h6>
              </Col>
          </Row>
        </Col>

      </Row>
      <ItemTitle />
      <ItemStates />
      <BugItemDetail />
    </Main>
  )
}