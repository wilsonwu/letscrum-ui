import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "./ProjectCard.css"

export const ProjectCard = () => {
  const navigate = useNavigate();
  // arguments: projectId, projectName, projectDisplayName
  // const projectData = [
  //   { projectId: "1", projectName: "11", projectDisplayName: "111" },
  //   { projectId: "1", projectName: "11", projectDisplayName: "111" },
  //   { projectId: "1", projectName: "11", projectDisplayName: "111" }
  // ];
  return (
    <>
      <Col>
        <Card border="light">
          <Card.Body className="projectCard">
            <Row>
              <Col sm="auto">
                <div className="projectAvatar"></div>
              </Col>
              <Col style={{ padding: 0 }}>
                <Card.Title>item.projectId</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">item.projectName</Card.Subtitle>
                <Card.Link onClick={ () => navigate("/userName/projectName")}>item.projectDisplayName</Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="light">
          <Card.Body className="projectCard">
            <Row>
              <Col sm="auto">
                <div className="projectAvatar"></div>
              </Col>
              <Col style={{ padding: 0 }}>
                <Card.Title>item.projectId</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">item.projectName</Card.Subtitle>
                <Card.Link href="#">item.projectDisplayName</Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="light">
          <Card.Body className="projectCard">
            <Row>
              <Col sm="auto">
                <div className="projectAvatar"></div>
              </Col>
              <Col style={{ padding: 0 }}>
                <Card.Title>item.projectId</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">item.projectName</Card.Subtitle>
                <Card.Link href="#">item.projectDisplayName</Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}