import React from "react"
import { TextField, Button, Grid } from "@mui/material"

export const LogIn = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Grid container justifyContent="center">
          <TextField
              required
              fullWidth
            id="username"
            label="Username"
            variant="standard"
          />
        </Grid>
        <Grid container justifyContent="center">
          <TextField
              required
              fullWidth
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Grid>
        <Grid container justifyContent="center">
          <Button variant="contained">
            Log In
          </Button>
        </Grid>
      </Grid>
      <Grid item xs>
      </Grid>
      
    </Grid>
  )
}