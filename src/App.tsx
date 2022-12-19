import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PrivateRoute, SideNav, SideNavInProject, TopNav } from './components'
import { ProjectListPage, SignInPage, RouteErrorPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute>
      <TopNav />
    </PrivateRoute>,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: '/',
        element: <SideNav />,
        children: [
          {
            path: '/',
            element: <ProjectListPage />
          }
        ]
      },
      {
        path: '/projectName',
        element: <SideNavInProject />,
        children: [
          {
            path: '/projectName/',
            element: <ProjectListPage />
          }
        ]
      }
    ]
  },
  {
    path: '/signIn',
    element: <SignInPage />,
    errorElement: <RouteErrorPage />
  }
])

const App: React.FunctionComponent = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
