import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { selectUserAccessToken } from '../../redux/reducers/userSlice'

interface PrivateRouteProps {
  children: React.ReactElement
}

export const PrivateRoute = (props: PrivateRouteProps): ReactElement => {
  const jwt = useAppSelector(selectUserAccessToken)
  if (jwt === null) { return <Navigate to={'/signIn'} /> }
  return props.children
}
