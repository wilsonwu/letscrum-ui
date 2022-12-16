import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, MenuList, MenuItem, ListItemText, Avatar, Typography } from '@mui/material'
import { grey, green, blue } from '@mui/material/colors'
import { styled } from '@mui/system'
import { useAppSelector } from '../../redux/hooks'
import { selectUserName } from '../../redux/reducers/userSlice'

const SideNavList = styled(MenuList)({
  width: '20rem',
  height: '100vh',
  paddingTop: '1rem',
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

export const SideNav: React.FunctionComponent = () => {
  const displayName = useAppSelector(selectUserName)
  const displayLetter = displayName?.toString().toUpperCase().charAt(0)
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNavList>
        <SideMenuItem>
          <Avatar sx={{ width: '1.5rem', height: '1.5rem', bgcolor: green[800] }} variant="rounded">
            <Typography sx={{ fontSize: '.875rem', fontWeight: 300 }}>
              {displayLetter ?? 'X'}
            </Typography>
          </Avatar>
          {/* cannot route to sign in page, use text instead */}
          <SideMenuItemText>
            {displayName ?? 'without authentication'}
          </SideMenuItemText>
        </SideMenuItem>
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </SideNavList>
      <Outlet />
    </Box>
  )
}
