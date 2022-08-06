import React from "react";
import { ProjectCard } from "../../components"
import { Main } from "../../layouts/Main";
import { Row } from 'react-bootstrap'

export const ProjectList = () => {
  return (
    <Main>
      <Row>
        <h5 className="py-3" style={{ fontWeight: "300"}}>Work Items</h5>
      </Row>
      <ProjectCard projectId="1" projectName="test" projectDisplayName="Test Project" />
    </Main>
  )
}