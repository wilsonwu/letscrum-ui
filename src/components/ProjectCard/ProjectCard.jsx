import React from "react";
import { Card } from "react-bootstrap";
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
    <Card border="light">
      <Card.Body className="projectCard" style={{ display: "inline-flex" }}>
        <div className="projectAvatar"></div>
        <div style={{ paddingLeft: "1rem" }}>
          <Card.Title style={{ fontSize: "1.125rem", marginBottom: ".825rem"}}>item.projectId</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: ".875rem", fontWeight: "400"}}>item.projectName</Card.Subtitle>
          <Card.Link onClick={() => navigate("/userName/projectName")} style={{ fontSize: ".875rem"}}>item.projectDisplayName</Card.Link>
        </div>
      </Card.Body>
    </Card>
  )
}