import React, { ReactElement, useState } from 'react'
import { Box, Typography, Tab, Tabs, TextField, InputAdornment, Stack, Button } from '@mui/material'
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'
import { FilterAlt } from '@mui/icons-material'
import { useAppSelector } from '../../redux/hooks'
import { selectUserName } from '../../redux/reducers/userSlice'

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
const ProjectTabs = styled(Tabs)({
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
const FilterInput = styled(TextField)({
  marginLeft: 'auto',
  '& .MuiInputBase-root': {
    borderRadius: 2,
    backgroundColor: grey[300],
    padding: 1
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderStyle: 'none'
    }
  },
  '& .MuiInputAdornment-root': {
    width: '2rem',
    marginRight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '& .MuiSvgIcon-root': {
    fontSize: '.875rem',
    color: grey[500]
  },
  '& .MuiInputBase-input': {
    width: '12.5rem',
    padding: '2px 3px',
    height: '1.5rem',
    fontSize: '.875rem',
    fontWeight: '300',
    color: grey[900]
  }
})
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
export const ProjectListTab: React.FunctionComponent = () => {
  const name = useAppSelector(selectUserName)
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }
  return (
    <Wrapper>
      <HeaderWrapper direction='row'>
        <HeaderTitle>
          {name}
        </HeaderTitle>
        {(value === 0) && <CreateProjectBtn variant="contained">
          + New project
        </CreateProjectBtn>
        }
      </HeaderWrapper>
      <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
        <ProjectTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <ProjectTab label="Projects" {...a11yProps(0)} />
          <ProjectTab label="My work items" {...a11yProps(1)} />
          <ProjectTab label="My pull requests" {...a11yProps(2)} />
        </ProjectTabs>
        {(value === 0) && <FilterInput
          placeholder="Filter projects"
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FilterAlt />
              </InputAdornment>
            )
          }}
        />
        }
      </Stack>
      <TabPanel value={value} index={0}>
        Projects List no data
      </TabPanel>
      <TabPanel value={value} index={1}>
        My work item List no data
      </TabPanel>
      <TabPanel value={value} index={2}>
        My pull request List no data
      </TabPanel>
    </Wrapper>
  )
}
