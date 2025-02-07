import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PrivateRoute, SideNav, SideNavInProject, TopNav } from './components'
import { ProjectListPage, SignInPage, RouteErrorPage } from './pages'
import axios from 'axios'
import { useAppSelector } from './redux/hooks'
import { selectUserAccessToken } from './redux/reducers/userSlice'

const HeadersAuth = (): void => {
  const jwt = useAppSelector(selectUserAccessToken)
  // axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
  axios.defaults.baseURL = 'https://imoogoo.com/api'
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  // axios.defaults.headers.Authorization = `Bearer ${jwt}`
  axios.defaults.headers.common.Authorization = `Bearer ${jwt ?? ''}`
}

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
    <>
      {HeadersAuth()}
      <RouterProvider router={router} />
    </>

  )
}

export default App
