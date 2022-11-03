import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "./ProjectCard.css"

export const ProjectCard = ({projectId, projectName, projectDisplayName}) => {
  const navigate = useNavigate();

  return (
    <Card border="light">
      <Card.Body className="projectCard" style={{ display: "inline-flex" }}>
        <div className="projectAvatar"></div>
        <div style={{ paddingLeft: "1rem" }}>
          <Card.Title style={{ fontSize: "1.125rem", marginBottom: ".825rem" }}>
            {projectId}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: ".875rem", fontWeight: "400" }}>
            {projectName}
          </Card.Subtitle>
          <Card.Link onClick={() => navigate("/userName/projectName")} style={{ fontSize: ".875rem" }}>
            {projectDisplayName}
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  )
}

ProjectCard.propTypes = {
  projectId: PropTypes.node.isRequired,
  projectName: PropTypes.node.isRequired,
  projectDisplayName: PropTypes.node.isRequired
}