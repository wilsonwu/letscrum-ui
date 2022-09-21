import React from "react";
import { ListOption, ItemsTable } from "../../components"
import { Main } from "../../layouts/Main";
import { Row } from 'react-bootstrap'

export const WorkItemList = () => {
  return (
    <Main>
      <Row>
        <h5 className="py-3 px-3" style={{ fontWeight: "300"}}>Work Items</h5>
      </Row>
      <ListOption />
      <ItemsTable />
    </Main>
  )
}