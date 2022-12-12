import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import axios from 'axios'

interface UserProps {
  inputName: string
  inputPwd: string
}

interface ResponseProps {
  item: {
    token: {
      accessToken: string
    }
  }
}

export const SignInForm: React.FunctionComponent = () => {
  const handleSignIn = (): void => {
    // if define variables seperately, no need interfase
    // const inputName: string = (document.getElementById('name') as HTMLInputElement).value
    // const inputPwd: string = (document.getElementById('password') as HTMLInputElement).value
    const signIn: UserProps = {
      inputName: (document.getElementById('name') as HTMLInputElement).value,
      inputPwd: (document.getElementById('password') as HTMLInputElement).value
    }
    async function SignIn (): Promise<ResponseProps> {
      try {
        const response = await axios.post('https://imoogoo.com/api/v1/signin', {
          name: signIn.inputName,
          password: signIn.inputPwd
        })
        return response.data
      } catch (e: any) {
        return e.message
      }
    }
    void SignIn()
  }
  return (
    <Box>
      <TextField
        required
        id="name"
        label="Enter your nanme"
        defaultValue="Enter your nanme"
        variant="standard"
      />
      <TextField
        required
        id="password"
        label="Enter password"
        type="password"
        defaultValue="Enter password"
        variant="standard"
      />
      <Button variant="contained" onClick={handleSignIn}>
        Submit
      </Button>
    </Box>
  )
}
