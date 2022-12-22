import React, { useEffect, useState } from 'react'
import { Stack, Card, CardContent, Typography, CardActions, Avatar, Paper, Divider } from '@mui/material'
import styled from '@emotion/styled'
import { FiberManualRecord, FactCheck, AccountTree, RocketLaunch, Science, Widgets } from '@mui/icons-material'
import { grey, red, teal, deepOrange, blue, deepPurple, pink, amber, cyan, green } from '@mui/material/colors'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import axios from 'axios'

interface ProjectProps {
  id: string
  name: string
  displayName: string
  updatedAt: string
}
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
  color: grey[300],
  width: '.5rem',
  height: '.5rem'
})
const TailItemCardContent = styled(CardContent)({
  '&:last-child': {
    paddingBottom: '1rem'
  }
})
const AvatarPalette = [grey[700], red[700], teal[700], deepOrange[700], blue[700], deepPurple[700], pink[700], amber[700], cyan[700], green[700]]
const PickAvatarColor = (colorSet: string[]): string => {
  const i = Math.floor(Math.random() * 10)
  const pickedColor = colorSet[i]
  return pickedColor
}
export const ProjectListTable = (): any => {
  const [hoverId, setHoverId] = useState<string | null>(null)
  const handleMouseIn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setHoverId(e.currentTarget.id)
  }
  const handleMouseOut = (): void => setHoverId(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [items, setItems] = useState<ProjectProps[]>([])
  let itemsHead: ProjectProps[] = []
  let itemsTail: ProjectProps[] = []
  const fetchProjectItems = async (): Promise<ProjectProps[] | string> => {
    try {
      const response = await axios.get('/v1/projects?page=1&size=10')
      setLoading(false)
      setItems(response.data.items)
      return items
    } catch (e: any) {
      setLoading(false)
      setError(e.message)
      return error
    }
  }
  useEffect(() => {
    fetchProjectItems()
      .catch(() => alert(error))
  }, [])
  if (items.length > 3) {
    itemsHead = items.slice(0, 3)
    itemsTail = items.slice(3)
  }
  return (
    <>
      <TopProjectsWrapper direction='row'>
        <Grid container spacing={2} sx={{ flexGrow: 1, width: '100%' }}>
          {
            loading
              ? <>loading</>
              : <>
                {
                  itemsHead.map((item) => {
                    return (
                      <Grid xs={4} key={item.id}>
                        <Card sx={{ minWidth: '18rem', height: '12rem' }}>
                          <CardContent sx={{ height: '7rem' }}>
                            <Stack direction='row'>
                              <Grid sx={{ width: '4rem' }}>
                                <Avatar sx={{ backgroundColor: PickAvatarColor(AvatarPalette), width: '3rem', height: '3rem' }} variant="rounded">
                                  I
                                </Avatar>
                              </Grid>
                              <Grid sx={{ width: 'auto' }}>
                                <Typography sx={{ fontSize: '1.125rem' }}>
                                  {item.name} {item.id}
                                </Typography>
                                <Typography sx={{ color: grey[400] }}>
                                  {item.displayName}
                                </Typography>
                              </Grid>
                            </Stack>
                          </CardContent>
                          <CardActionsWrapper
                            id={item.id}
                            key={item.id}
                            onMouseEnter={handleMouseIn}
                            onMouseLeave={handleMouseOut}
                          >
                            {
                              // hover on Card
                              item.id === hoverId
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
                    )
                  })
                }
              </>
          }
        </Grid>
      </TopProjectsWrapper>
      <Paper>
        {
          itemsTail.map((item) => {
            return (
              <>
                <Stack key={item.id} direction='row'>
                  <TailItemCardContent sx={{ height: '3rem', padding: '1rem' }}>
                    <Stack direction='row'>
                      <Grid sx={{ width: '4rem' }}>
                        <Avatar sx={{ backgroundColor: PickAvatarColor(AvatarPalette), width: '3rem', height: '3rem' }} variant="rounded">
                          I
                        </Avatar>
                      </Grid>
                      <Grid sx={{ width: 'auto' }}>
                        <Typography sx={{ fontSize: '1.125rem' }}>
                          {item.name} {item.id}
                        </Typography>
                        <Typography sx={{ color: grey[400] }}>
                          {item.displayName}
                        </Typography>
                      </Grid>
                    </Stack>
                  </TailItemCardContent>
                  <CardActionsWrapper
                    sx={{ marginLeft: 'auto' }}
                    id={item.id}
                    onMouseEnter={handleMouseIn}
                    onMouseLeave={handleMouseOut}
                  >
                    {
                      // hover on Card
                      item.id === hoverId
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
                </Stack>
                <Divider sx={{ borderColor: grey[100] }} />
              </>
            )
          })
        }
      </Paper>
    </>
  )
}
