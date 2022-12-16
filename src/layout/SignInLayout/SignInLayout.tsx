import React from 'react'
import { Box, Container } from '@mui/material'

interface SignInFormProps {
  children: React.ReactNode
}

export const SignInLayout: React.FC<SignInFormProps> = (props: SignInFormProps) => {
  console.log('sign in layout')
  return (
    <Box>
      <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {props.children}
      </Container>
    </Box>
  )
}
