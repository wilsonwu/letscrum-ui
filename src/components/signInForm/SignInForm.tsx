import React from 'react'
import { Box, TextField, Button } from '@mui/material'

export const SignInForm: React.FunctionComponent = () => {
  const handleChange = (): void => {}
  const handleSignIn = (): void => {}
  return (
    <Box>
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
