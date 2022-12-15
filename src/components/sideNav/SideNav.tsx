import React from 'react'
import { Outlet } from 'react-router-dom'

export const SideNav: React.FC = () => {
  return (
    <>
      Here is SideNav
      <Outlet />
    </>
  )
}
