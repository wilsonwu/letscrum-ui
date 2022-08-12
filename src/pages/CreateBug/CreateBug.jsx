import React from "react";
import { Row } from 'react-bootstrap'
import { ItemTitle } from "../../components";
import { Main } from "../../layouts/Main";

export const CreateBug = () => {
  return (
    <Main>
      <Row>
        <h5 className="py-3" style={{ fontWeight: "300"}}>Work Items</h5>
      </Row>
      <ItemTitle />
    </Main>
  )
}