import React from 'react'
import { useRouteError } from 'react-router-dom'

export const RouteErrorPage: React.FunctionComponent = () => {
  const error: any = useRouteError()
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(Boolean(error.statusText)) || error.message}</i>
      </p>
    </div>
  )
}
