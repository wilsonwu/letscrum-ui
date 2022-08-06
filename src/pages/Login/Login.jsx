import React from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const Login = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}