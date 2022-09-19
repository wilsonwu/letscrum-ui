import React from 'react';
import { Col, Row, Navbar, Form, Table, Container, Dropdown, CloseButton } from 'react-bootstrap'
import './ItemsTable.css'

export const ItemsTable = () => {
  return (
    <>
    {/* Filter bar */}
      <Row className='my-1 px-2'>
        <Navbar style={{ backgroundColor: "rgb(240, 240, 240)" }} expand="lg" className='rounded-1 justify-content-end'>
          <Container fluid>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Filter by keyword"
                  className="itemTableSearch"
                  aria-label="Search"
                  size="sm"
                />
              </Form>
            </Col>

            <Dropdown className='mx-1'>
              <Dropdown.Toggle className="filters">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu className='filtersMenu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mx-1'>
              <Dropdown.Toggle className="filters">
                Assigned to
              </Dropdown.Toggle>
              <Dropdown.Menu className='filtersMenu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mx-1'>
              <Dropdown.Toggle className="filters">
                States
              </Dropdown.Toggle>
              <Dropdown.Menu className='filtersMenu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mx-1'>
              <Dropdown.Toggle className="filters">
                Area
              </Dropdown.Toggle>
              <Dropdown.Menu className='filtersMenu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='mx-1'>
              <Dropdown.Toggle className="filters">
                Tags
              </Dropdown.Toggle>
              <Dropdown.Menu className='filtersMenu'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <CloseButton className='px-3' />

          </Container>
        </Navbar>
      </Row>
    {/* table */}
      <Row className='px-2'>
        <Table responsive hover="ture" borderless>
          <thead>
            <tr className='tableRow'>
              <th>ID</th>
              <th>Title</th>
              <th>Assigned To</th>
              <th>State</th>
              <th>Area Path</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody className='tableBody'>
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