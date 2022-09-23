import React from "react";
import { ListOption, ItemsTable } from "../../components"
import { Main } from "../../layouts/Main";
import { Container, Row } from 'react-bootstrap'

export const WorkItemList = () => {
  return (
    <Main>
      <Container>
        <Row className="pt-2">
          <h5 className="py-3 mb-0" style={{ fontWeight: "300", width: "auto", lineHeight: "2rem" }}>Work Items</h5>
        </Row>
        <ListOption />
        <ItemsTable />
      </Container>
    </Main>
  )
}