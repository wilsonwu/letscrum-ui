import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'
import { useAppSelector } from '../../redux/hooks'
import { selectUserName } from '../../redux/reducers/userSlice'
import { ProjectListTab } from '../../components'
const Wrapper = styled(Box)({
  width: '100%',
  backgroundColor: grey[100],
  padding: '1rem 1.5rem'
})
const HeaderWrapper = styled(Stack)({
  width: '100%',
  height: '3rem',
  justifyContent: 'space-between',
  alignItems: 'center'
})
const HeaderTitle = styled(Typography)({
  lineHeight: '3rem',
  fontSize: '1.375rem',
  fontWeight: 500,
  color: grey[900]
})
const CreateProjectBtn = styled(Button)({
  height: '2rem',
  padding: '.2rem auto',
  borderRadius: '2px'
})
export const ProjectListPage: React.FunctionComponent = () => {
  const name = useAppSelector(selectUserName)
  return (
    <Wrapper>
      <HeaderWrapper direction='row'>
        <HeaderTitle>
          {name}
        </HeaderTitle>
        <CreateProjectBtn variant="contained">
          + New project
        </CreateProjectBtn>
      </HeaderWrapper>
      <ProjectListTab />
    </Wrapper>
  )
}
