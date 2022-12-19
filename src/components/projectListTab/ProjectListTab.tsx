import React, { ReactElement } from 'react'
import { Box, Typography, Tab, Tabs } from '@mui/material'
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
function TabPanel (props: TabPanelProps): ReactElement {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps (index: number): { id: string, 'aria-controls': string } {
  return {
    id: `${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}
const ProjectTabs = styled(Tabs)({
  paddingTop: '.5rem',
  '& .MuiTab-root': {
    padding: 0,
    minWidth: 0,
    marginRight: '1rem'
  },
  '& .Mui-selected': {
    fontWeight: 'bold',
    color: grey[900]
  }
})
const ProjectTab = styled(Tab)({
  fontSize: '.75rem',
  color: grey[800]
})
export const ProjectListTab: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }
  return (
    <Box>
    <ProjectTabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <ProjectTab label="Projects" {...a11yProps(0)} />
      <ProjectTab label="My work items" {...a11yProps(1)} />
      <ProjectTab label="My pull requests" {...a11yProps(2)} />
    </ProjectTabs>
      <TabPanel value={value} index={0}>
        Projects List no data
      </TabPanel>
      <TabPanel value={value} index={1}>
        My work item List no data
      </TabPanel>
      <TabPanel value={value} index={2}>
        My pull request List no data
      </TabPanel>
    </Box>
  )
}
