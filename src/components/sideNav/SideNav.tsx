import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, MenuList, MenuItem, ListItemText, Avatar, Typography } from '@mui/material'
import { grey, green } from '@mui/material/colors'
import { styled } from '@mui/system'

const SideNavList = styled(MenuList)({
  width: '20rem',
  height: '100vh',
  paddingTop: '1rem',
  borderRightWidth: '1px',
  borderRightStyle: 'solid',
  borderRightColor: grey[300]
})

const SideMenuItem = styled(MenuItem)({
  padding: '.75rem',
  backgroundColor: grey[100]
})

export const SideNav: React.FunctionComponent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNavList>
        <SideMenuItem>
          <Avatar sx={{ width: '1.5rem', height: '1.5rem', bgcolor: green[800] }} variant="rounded">
            <Typography sx={{ fontSize: '.875rem', fontWeight: 300 }}>
              A
            </Typography>
          </Avatar>
          <ListItemText sx={{ fontSize: '.875rem', fontWeight: 300 }}>Cut</ListItemText>
        </SideMenuItem>
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </SideNavList>
      <Outlet />
    </Box>
  )
}
