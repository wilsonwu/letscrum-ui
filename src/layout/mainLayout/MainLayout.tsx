import React from 'react'
import { Box } from '@mui/material'
import { SideNav, TopNav } from '../../components'

interface MainProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainProps> = (props: MainProps) => {
  return (
    <Box>
      <TopNav />
      <SideNav />
      {props.children}
    </Box>
  )
}
