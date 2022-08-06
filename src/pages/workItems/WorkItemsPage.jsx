import React from "react";
import { ItemsListOption } from "../../components"
import { MainLayout } from "../../layout/mainLayout";
import { Row } from 'react-bootstrap'

export const WorkItemsPage = () => {
  return (
    <MainLayout>
      <Row>
        <h5 className="py-3" style={{ fontWeight: "300"}}>Work Items</h5>
      </Row>
      <ItemsListOption />
    </MainLayout>
  )
}