import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, MenuList, MenuItem, ListItemText, Avatar, Typography, Button, Stack } from '@mui/material'
import { grey, green, blue } from '@mui/material/colors'
import SettingsIcon from '@mui/icons-material/Settings'
import { styled } from '@mui/system'
import { useAppSelector } from '../../redux/hooks'
import { selectUserName } from '../../redux/reducers/userSlice'

const SideNavWrapper = styled(Stack)({
  display: 'flex',
  width: '16rem',
  height: 'calc(100vh - 5rem - 1px)',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderRightWidth: '1px',
  borderRightStyle: 'solid',
  borderRightColor: grey[300]
})
const SideMenuItem = styled(MenuItem)({
  padding: '.5rem',
  backgroundColor: blue[50],
  borderLeftStyle: 'solid',
  borderLeftWidth: '.25rem',
  borderLeftColor: blue[600]
})
const SideMenuItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    paddingLeft: '.75rem',
    fontSize: '.75rem',
    color: grey[800]
  }
})
const AddOrgButton = styled(Button)({
  display: 'flex',
  justifyContent: 'start',
  paddingLeft: '1rem',
  color: blue[800],
  fontSize: '.75rem',
  '&:hover': {
    backgroundColor: grey[100]
  }
})
const SetOrgButton = styled(Button)({
  width: '16rem',
  color: grey[800],
  justifyContent: 'start',
  paddingLeft: '1rem',
  fontSize: '.75rem',
  marginTop: 'auto',
  '&:hover': {
    backgroundColor: grey[100]
  }
})

export const SideNav: React.FunctionComponent = () => {
  const displayName = useAppSelector(selectUserName)
  const displayLetter = displayName?.toString().toUpperCase().charAt(0)
  return (
    <Box display='flex'>
      <SideNavWrapper>
      <MenuList>
        <SideMenuItem>
          <Avatar sx={{ width: '1.5rem', height: '1.5rem', bgcolor: green[800] }} variant="rounded">
            <Typography sx={{ fontSize: '.875rem', fontWeight: 300 }}>
              {displayLetter}
            </Typography>
          </Avatar>
          <SideMenuItemText>
            {displayName}
          </SideMenuItemText>
        </SideMenuItem>
      </MenuList>
      <AddOrgButton>
        Web Clipboard
        </AddOrgButton>
      <SetOrgButton startIcon={<SettingsIcon />}>
        Organization settings
        </SetOrgButton>
      </SideNavWrapper>
      <Outlet />
    </Box>
  )
}
