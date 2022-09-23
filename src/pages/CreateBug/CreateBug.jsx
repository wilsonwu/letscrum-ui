import React from "react";
import { Row, Container } from 'react-bootstrap'
import { ItemStates, ItemTitle, BugItemDetail } from "../../components";
import { Main } from "../../layouts/Main";

export const CreateBug = () => {
  return (
    <Main>
      <Container>
      <Row className="pt-2 ps-2">
        <h5 className="py-3 mb-0" style={{ fontWeight: "300", width: "auto", lineHeight: "2rem" }}>Work Items</h5>
        <div style={{ backgroundColor: "var(--bg-color-basic)", width: "1px", height: "2rem", padding: 0, margin: "1rem .3rem" }} />      
        <h6 className="py-3 mb-0" style={{ fontWeight: "300", width: "auto", lineHeight: "2rem" }}>Back to Work Items</h6>
      </Row>
      <ItemTitle />
      <ItemStates />
      <BugItemDetail />
      </Container>
    </Main>
  )
}