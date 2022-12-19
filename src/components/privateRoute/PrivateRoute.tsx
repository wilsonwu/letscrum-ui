import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { selectUserAccessToken } from '../../redux/reducers/userSlice'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps): any => {
  const jwt = useAppSelector(selectUserAccessToken)
  if (jwt === null) { return <Navigate to={'/signIn'} /> }
  return props.children
}
