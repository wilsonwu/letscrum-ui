import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'
import md5 from 'md5'

interface UserState {
  loading: boolean
  error: any
  id: string | null
  name: string | null
  email: string | null
  password: string | null
  inSuperAdmin: boolean
  token: {
    accessToken: string | null
  }
}
const initialState: UserState = {
  loading: false,
  error: null,
  id: null,
  name: null,
  email: null,
  password: null,
  inSuperAdmin: false,
  token: {
    accessToken: null
  }
}

export const userSignIn = createAsyncThunk(
  'user/signIn',
  async (params: { inputName: string | null, inputPwd: string }) => {
    try {
      const cryptedData = md5(params.inputPwd)
      const response = await axios.post('/v1/signin', {
        name: params.inputName,
        password: cryptedData
      })
      return response.data.item
    } catch (e: any) {
      return e.message
    }
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignIn.pending, (state) => {
        state.loading = true
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.loading = false
        state.token.accessToken = action.payload.token.accessToken
        state.name = action.payload.name
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export const selectUserLoading = (state: RootState): boolean => state.user.loading
export const selectUserError = (state: RootState): any => state.user.error
export const selectUserAccessToken = (state: RootState): string | null => state.user.token.accessToken
export const selectUserName = (state: RootState): string | null => state.user.name
export default userSlice.reducer
