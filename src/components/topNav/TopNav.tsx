import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Breadcrumbs, Link, Typography, TextField, InputAdornment, Avatar } from '@mui/material'
import { SearchOutlined, PlaylistAddCheckOutlined, HelpOutlineOutlined, ManageAccountsOutlined } from '@mui/icons-material'
import { deepPurple } from '@mui/material/colors'

const BreadcrumbItems = styled(Breadcrumbs)({
  '& .MuiBreadcrumbs-li': {
    padding: '0 .5rem',
    lineHeight: '3rem',
    fontWeight: 400,
    fontSize: '.875rem'
  },
  '& .MuiTypography-root': {
    fontSize: '.875rem',
    padding: 8,
    borderRadius: 2,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#fafafa'
    }
  }
})
const SearchInput = styled(TextField)({
  '& .MuiInputBase-root': {
    padding: 1,
    borderRadius: 2,
    marginRight: '1rem'
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
    width: '12.5rem',
    padding: '2px 3px',
    height: '1.75rem',
    fontSize: '.875rem',
    transition: 'width .3s',
    '&:focus': {
      width: '18.75rem'
    }
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
    backgroundColor: '#fafafa',
    cursor: 'pointer'
  }
})

export const TopNav: React.FunctionComponent = () => {
  const [isFoucs, setIsFocus] = useState<boolean>(false)
  return (
    <Box>
      <Stack direction='row' sx={{ justifyContent: 'space-between', height: '3rem', borderBottom: '1px solid #e0e0e0' }}>
        <TopNavCtn sx={{ padding: '0 8px' }}>
          <Typography>
            LetScrum
          </Typography>
        </TopNavCtn>
        {isFoucs
          ? <></>
          : <BreadcrumbItems aria-label="breadcrumb">
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
        }
        <TopNavCtn sx={{ marginLeft: 'auto' }}>
          {isFoucs
            ? <div style={{
              width: 'auto',
              height: '2rem',
              borderTop: '1px solid grey',
              borderBottom: '1px solid grey',
              borderLeft: '1px solid grey',
              padding: '0 .75rem'
            }}>
              <Typography sx={{ textAlign: 'center', fontSize: '.875rem', lineHeight: '2rem' }}>
                This project
              </Typography>
            </div>
            : <></>
          }
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
            onFocus={(e) => {
              e.target.placeholder = 'Tpye / for a list of filters'
              setIsFocus(!isFoucs)
            }}
            onBlur={(e) => {
              e.target.placeholder = 'Search'
              setIsFocus(!isFoucs)
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
          <Avatar sx={{ bgcolor: deepPurple[500], width: '2rem', height: '2rem' }}>
            L</Avatar>
        </TopNavItem>
      </Stack>
    </Box>
  )
}
