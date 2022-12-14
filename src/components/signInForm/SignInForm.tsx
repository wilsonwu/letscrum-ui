import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { userSignIn, selectUserLoading, selectUserError, selectUserAccessToken } from '../../redux/reducers/userSlice'
import { useNavigate } from 'react-router-dom'

export const SignInForm: React.FunctionComponent = () => {
  const [inputName, setInputName] = useState<string | null>(null)
  const [inputPwd, setInputPwd] = useState<string | null>(null)
  const loading = useAppSelector(selectUserLoading)
  const error = useAppSelector(selectUserError)
  const jwt = useAppSelector(selectUserAccessToken)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value
    switch (e.target.name) {
      case 'name': {
        setInputName(input)
        break
      }
      case 'password': {
        setInputPwd(input)
        break
      }
    }
  }
  const handleSignIn = (): void => {
    void dispatch(userSignIn({ inputName, inputPwd }))
      .then(() => {
        useEffect(() => {
          navigate('/', { replace: true })
        }, [jwt])
      })
      .catch(() => alert(error))
  }
  return (
    <Box>
      {
        loading
          ? <>
            <TextField
              required
              id="name"
              label="Enter your nanme"
              defaultValue="Enter your nanme"
              variant="standard"
              onChange={handleChange}
              disabled
            />
            <TextField
              required
              id="password"
              label="Enter password"
              type="password"
              defaultValue="Enter password"
              variant="standard"
              onChange={handleChange}
              disabled
            />
            <Button variant="contained" onClick={handleSignIn} disabled>
              Submit
            </Button>
          </>
          : <>
            <TextField
              required
              id="name"
              label="Enter your nanme"
              defaultValue="Enter your nanme"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              required
              id="password"
              label="Enter password"
              type="password"
              defaultValue="Enter password"
              variant="standard"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSignIn}>
              Submit
            </Button>
          </>
      }
      <TextField
        required
        id="name"
        label="Enter your nanme"
        defaultValue="Enter your nanme"
        variant="standard"
        onChange={handleChange}
      />
      <TextField
        required
        id="password"
        label="Enter password"
        type="password"
        defaultValue="Enter password"
        variant="standard"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSignIn}>
        Submit
      </Button>
    </Box>
  )
}
