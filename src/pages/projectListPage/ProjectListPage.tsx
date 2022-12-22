import React from 'react'
import { ProjectListTab } from '../../components'
import { Box } from '@mui/system'
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'

const Wrapper = styled(Box)({
  width: '100%',
  backgroundColor: grey[100],
  padding: '1rem 1.5rem'
})
export const ProjectListPage: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <ProjectListTab />
    </Wrapper>
  )
}
