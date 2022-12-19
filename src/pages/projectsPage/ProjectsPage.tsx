import React from 'react'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
// , Tab, Tabs
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'
import { useAppSelector } from '../../redux/hooks'
import { selectUserName } from '../../redux/reducers/userSlice'

// interface TabPanelProps {
//   children?: React.ReactNode
//   index: number
//   value: number
// }

const HeaderWrapper = styled(Stack)({
  height: '3rem',
  justifyContent: 'space-between'
})
const HeaderTitle = styled(Typography)({
  lineHeight: '3rem',
  fontSize: '1.375rem',
  fontWeight: 500,
  color: grey[800]
})
const CreateProjectBtn = styled(Button)({
  padding: '.2rem auto',
  height: '2rem',
  borderRadius: '2px'
})

// function TabPanel (props: TabPanelProps): React.FunctionComponent {
//   const { children, value, index, ...other } = props
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// function a11yProps (index: number): any {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`
//   }
// }
export const ProjectsPage: React.FunctionComponent = () => {
  const name = useAppSelector(selectUserName)
  // const [value, setValue] = React.useState(0)
  // const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
  //   setValue(newValue)
  // }
  return (
    <Box sx={{ display: 'flex', width: '100%', backgroundColor: grey[100] }}>
      <Container sx={{ padding: '1rem 0' }}>
        <HeaderWrapper direction='row'>
          <HeaderTitle>
            {name}
          </HeaderTitle>
          <CreateProjectBtn variant="contained">
            + New project
          </CreateProjectBtn>
        </HeaderWrapper>
        {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
      </Container>
    </Box>
  )
}
