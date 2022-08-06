import React from "react";
import { ItemsListOption } from "../../components"
import { Main } from "../../layouts/Main";
import { Row } from 'react-bootstrap'

export const WorkItemList = () => {
  return (
    <Main>
      <Row>
        <h5 className="py-3" style={{ fontWeight: "300"}}>Work Items</h5>
      </Row>
      <ItemsListOption />
    </Main>
  )
}