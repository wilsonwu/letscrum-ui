import React from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { signIn, signOff } from '../../redux/reducers/userSlice'

export const Login = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Button variant="primary"
            onClick={() => dispatch(signIn({userId: 1, username: "123"}))}
          >
            Test Login
          </Button>
          <Button variant="primary"
            onClick={() => dispatch(signOff())}
          >
            Test Logout
          </Button>
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