import React from "react";
import { Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import './ItemTitle.css';

export const ItemTitle = () => {
  return (
    <>
      <Row className="py-2 px-0 me-2" >
        <div style={{ backgroundColor: "rgb(240, 240, 240)", height: "1px" }}></div>
      </Row>
      <Row >
        <Row>
          <Col sm={1} className="itemTypeText">NEW BUG *</Col>
          <Col sm={11} className="itemReqText">Field Title cannot be empty</Col>
        </Row>
        <Row style={{ paddingTop: ".5rem", paddingBottom: ".5rem"}}>
          <Col>
            <Form.Control placeholder="Enter titile" className="createItemTitle" />
          </Col>
        </Row>
        <Row style={{ paddingBottom: ".5rem"}}>
          <Col sm={4}>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="detailToggle">
                Unassigned
              </Dropdown.Toggle>
              <Dropdown.Menu className="detailDropDownMenu">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={4} >
            <Button variant="link" className="commentBtn">
              counted comments
            </Button>
            <Button className="addTagBtn">
              Add tag
            </Button>
          </Col>
          <Col sm={4}>
            <Button className="detailSaveBtn">save</Button>
            <Button className="hotDisableBtn">refresh</Button>
            <Button className="hotDisableBtn">Revent changes</Button>
            <Button className="hotBtn">Opts</Button>
          </Col>
        </Row>
      </Row>
    </>
  )
}