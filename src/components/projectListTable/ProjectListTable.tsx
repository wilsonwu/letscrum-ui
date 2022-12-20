import React, { ReactElement } from 'react'
import { Stack, Card, CardContent, Typography, CardActions, Avatar } from '@mui/material'
import styled from '@emotion/styled'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { grey, red } from '@mui/material/colors'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const TopProjectsWrapper = styled(Stack)({
  width: '30%',
  padding: '1rem 0'
})
const CardActionsWrapper = styled(CardActions)({
  display: 'flex',
  justifyContent: 'end'
})
const IconWrapper = styled('div')({
  display: 'flex',
  width: '2rem',
  height: '2rem',
  marginRight: '.125rem',
  justifyContent: 'center',
  alignItems: 'center'
})
const FiberManualRecordIconStyle = styled(FiberManualRecordIcon)({
  color: grey[500],
  width: '.5rem',
  height: '.5rem'
})
const card = (
  <>
    <CardContent>
      <Grid container>
        <Grid sx={{ marginRight: '1rem' }}>
          <Avatar sx={{ backgroundColor: red[900], width: '3rem', height: '3rem' }} variant="rounded">
            I
          </Avatar>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: '1.125rem' }} component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <CardActionsWrapper>
      <IconWrapper>
        <FiberManualRecordIconStyle />
      </IconWrapper>
      <IconWrapper>
        <FiberManualRecordIconStyle />
      </IconWrapper>
      <IconWrapper>
        <FiberManualRecordIconStyle />
      </IconWrapper>
      <IconWrapper>
        <FiberManualRecordIconStyle />
      </IconWrapper>
    </CardActionsWrapper>
  </>
)
export const ProjectListTable = (): ReactElement => {
  return (
    <TopProjectsWrapper sx={{ minWidth: 275 }}>
      <Card>
        {card}
      </Card>
    </TopProjectsWrapper>
  )
}
