import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SideNav, TopNav } from './components'
import { OrganizationPage, SignInPage, RouteErrorPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopNav/>,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: '/',
        element: <SideNav />,
        children: [
          {
            path: '/',
            element: <OrganizationPage />
          }
        ]
      }
    ]
  },
  {
    path: '/signIn',
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
