import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { OrganizationPage, SignInPage, RouteErrorPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <OrganizationPage/>,
    errorElement: <RouteErrorPage />
  },
  {
    path: 'signIn',
    element: <SignInPage/>,
    errorElement: <RouteErrorPage />
  }
])

const App: React.FunctionComponent = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
