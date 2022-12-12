import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
  id: string | null
  name: string | null
  email: string | null
  password: string | null
  inSuperAdmin: boolean
  token: {
    accessToken: string | null
    refreshToken: string | null
  }
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  password: null,
  inSuperAdmin: false,
  token: {
    accessToken: null,
    refreshToken: null
  }
}

