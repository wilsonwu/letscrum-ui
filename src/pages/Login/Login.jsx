import React, { useEffect }  from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { signIn } from "../../redux/reducers/userSlice"

export const Login = () => {
  const token = useSelector((state) => state.user.accessToken) ;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) { navigate("/") }
  }, [token])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(signIn({ email, password }));
    console.log("submitted token: ", token);
  }

  return (
    <Container >
      <Row className="justify-content-center" style={{ height: "100vh" }}>
        <Col sm={12} md={4} className="align-self-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="admin@letscrum.io"
                defaultValue="admin@letscrum.io"
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                defaultValue=""
                readOnly
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}