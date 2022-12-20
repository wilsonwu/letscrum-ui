import React, { ReactElement, useState } from 'react'
import { Stack, Card, CardContent, Typography, CardActions, Avatar } from '@mui/material'
import styled from '@emotion/styled'
import { FiberManualRecord, FactCheck, AccountTree, RocketLaunch, Science, Widgets } from '@mui/icons-material'
import { grey, red, teal, deepOrange, blue, deepPurple, pink } from '@mui/material/colors'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const TopProjectsWrapper = styled(Stack)({
  width: '100%',
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
const FiberManualRecordIcon = styled(FiberManualRecord)({
  color: grey[500],
  width: '.5rem',
  height: '.5rem'
})
export const ProjectListTable = (): ReactElement => {
  const [hover, setHover] = useState<boolean>(false)
  const handleMouseIn = (): void => setHover(true)
  const handleMouseOut = (): void => setHover(false)
  return (
    <TopProjectsWrapper direction='row'>
      <Grid container spacing={2} sx={{ flexGrow: 1, width: '100%' }}>
        <Grid xs={4}>
          <Card sx={{ minWidth: '18rem', height: '12rem' }}>
            <CardContent sx={{ height: '7rem' }}>
              <Stack direction='row'>
                <Grid sx={{ width: '4rem' }}>
                  <Avatar sx={{ backgroundColor: red[900], width: '3rem', height: '3rem' }} variant="rounded">
                    I
                  </Avatar>
                </Grid>
                <Grid sx={{ width: 'auto' }}>
                  <Typography sx={{ fontSize: '1.125rem' }}>
                    benevolent
                  </Typography>
                  <Typography sx={{ color: grey[400] }}>
                    adjective
                  </Typography>
                </Grid>
              </Stack>
            </CardContent>
            <CardActionsWrapper
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
            {
              hover
                ? <>
                <IconWrapper>
                    <FactCheck sx={{ color: teal[500] }} />
                  </IconWrapper>
                  <IconWrapper>
                    <AccountTree sx={{ color: deepOrange[700] }} />
                  </IconWrapper>
                  <IconWrapper>
                    <RocketLaunch sx={{ color: blue[800] }} />
                  </IconWrapper>
                  <IconWrapper >
                    <Science sx={{ color: deepPurple[600] }} />
                  </IconWrapper>
                  <IconWrapper>
                    <Widgets sx={{ color: pink[500] }} />
                  </IconWrapper>
                </>
                : <>
                  <IconWrapper>
                    <FiberManualRecordIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <FiberManualRecordIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <FiberManualRecordIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <FiberManualRecordIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <FiberManualRecordIcon />
                  </IconWrapper>
                </>
            }
            </CardActionsWrapper>
          </Card>
        </Grid>
        <Grid xs={4}>
          card
        </Grid>
        <Grid xs={4}>
          card
        </Grid>
      </Grid>
    </TopProjectsWrapper>
  )
}
