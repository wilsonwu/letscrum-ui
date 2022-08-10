import React from 'react';
import { Row, Navbar, Nav, Form, Table, Button, Container, NavDropdown, CloseButton } from 'react-bootstrap'

export const ItemsTable = () => {
  return (
    <>
      <Row className='my-1'>
        <Navbar style={{backgroundColor: "rgb(240, 240, 240)"}} expand="lg" className='rounded-1'>
          <Container fluid>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Filter by keyword"
                className="me-2"
                aria-label="Search"
                size="sm"
              />
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="me-2 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="Types" className='px-3' id="selectItemTypes" >
                  <NavDropdown.Item href="#action3">
                    <Form.Check type="checkbox" label="bug" />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Button variant="light" className='rounded-0'>Clear</Button>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Assigned to" className='px-3' id="selectBelongings">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="States" className='px-3' id="selectItemsStates">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Area" className='px-3' id="selectItemsArea">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tags" className='px-3' id="selectItemsTags">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <CloseButton className='px-3' />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
      <Table responsive hover="ture" borderless>
      <thead>
        <tr style={{fontSize: "12px", color: "#333", fontWeight: "400"}}>
          <th>ID</th>
          <th>Title</th>
          <th>Assigned To</th>
          <th>State</th>
          <th>Area Path</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody style={{fontSize: "14px", color: "#333", fontWeight: "400"}}>
        <tr>
          <td>66</td>
          <td>test description</td>
          <td>Wilson Wu</td>
          <td>New</td>
          <td>iMooGoo</td>
          <td></td>
        </tr>
        <tr>
          <td>65</td>
          <td>This is a bug report</td>
          <td>Unassigned</td>
          <td>New</td>
          <td>iMooGoo</td>
          <td></td>
        </tr>
        <tr>
          <td>63</td>
          <td>Todo Task</td>
          <td>Unassigned</td>
          <td>New</td>
          <td>iMooGoo</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
      </Row>
    </>
  )
}