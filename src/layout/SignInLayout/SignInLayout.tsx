import React from 'react'
import { Box } from '@mui/material'

interface SignInFormProps {
  children: React.ReactNode
}

export const SignInLayout: React.FC<SignInFormProps> = (props: SignInFormProps) => {
  return (
    <Box>
      {props.children}
    </Box>
  )
}
