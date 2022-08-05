import React from "react"
import { TextField, Button, Box } from "@mui/material"

export const LogIn = () => {
  return (
    <Box
      display="grid"
      gap={6}
      direction="column"
      sx={{
        pt: 10,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1
      }}
    >
      <Box gridColumn="span 12"
        alignItems="center">
        <TextField
          required
          id="username"
          label="Username"
          variant="standard"
          sx={{
            width: 300
          }}
        />
      </Box>
      <Box gridColumn="span 12">
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{
            width: 300
          }}
        />
      </Box>
      <Box gridColumn="span 12"
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Button variant="contained">
          Log In
        </Button>
      </Box>
    </Box>
  )
}