import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Breadcrumbs, Link, Typography, TextField, InputAdornment, Avatar } from '@mui/material'
import { SearchOutlined, PlaylistAddCheckOutlined, HelpOutlineOutlined, ManageAccountsOutlined } from '@mui/icons-material'
import { deepPurple } from '@mui/material/colors'

const BreadcrumbItems = styled(Breadcrumbs)({
  '& .MuiBreadcrumbs-li': {
    padding: '0 8px',
    lineHeight: '3rem',
    fontWeight: 400,
    fontSize: '.75rem'
  },
  '& .MuiTypography-root': {
    fontSize: '.75rem',
    padding: 8,
    borderRadius: 2,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#f5f5f5'
    }
  }
})
const SearchInput = styled(TextField)({
  '& .MuiInputBase-root': {
    padding: 1,
    borderRadius: 2
  },
  '& .MuiInputAdornment-root': {
    width: '2rem',
    marginRight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '& .MuiSvgIcon-root': {
    fontSize: '.875rem'
  },
  '& .MuiInputBase-input': {
    padding: '2px 3px',
    height: '1.75rem',
    fontSize: '.875rem'
  }
})
const TopNavCtn = styled('div')({
  display: 'flex',
  width: 'auto',
  lineHeight: '3rem',
  justifyContent: 'center',
  alignItems: 'center'
})
const TopNavItem = styled('div')({
  display: 'flex',
  width: '3rem',
  lineHeight: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer'
  }
})

export const TopNav: React.FunctionComponent = () => {
  return (
    <Box>
      <Stack direction='row' sx={{ justifyContent: 'space-between', height: '3rem', borderBottom: '1px solid #e0e0e0' }}>
        <TopNavCtn sx={{ padding: '0 8px' }}>
          <Typography>LetScrum</Typography>
        </TopNavCtn>
        <BreadcrumbItems aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Breadcrumbs
          </Link>
        </BreadcrumbItems>
        <TopNavCtn sx={{ marginLeft: 'auto' }}>
          <SearchInput
            placeholder="Search"
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              )
            }}
          />
        </TopNavCtn>
        <TopNavItem>
          <PlaylistAddCheckOutlined sx={{ fontSize: '1rem' }} />
        </TopNavItem>
        <TopNavItem>
          <HelpOutlineOutlined sx={{ fontSize: '1rem', color: 'disabled' }} />
        </TopNavItem>
        <TopNavItem>
          <ManageAccountsOutlined sx={{ fontSize: '1rem', color: 'disabled' }} />
        </TopNavItem>
        <TopNavItem>
          <Avatar sx={{ bgcolor: deepPurple[500], width: '2rem', height: '2rem' }}>L</Avatar>
        </TopNavItem>
      </Stack>
    </Box>
  )
}
