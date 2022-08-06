import React from "react";
import { Card } from "react-bootstrap";

export const ProjectCard = (projectId, projectName, projectDisplayName) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{ projectDisplayName }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ projectName }</Card.Subtitle>
        <Card.Link href="#">/project/{ projectId }</Card.Link>
      </Card.Body>
    </Card>
  )
}