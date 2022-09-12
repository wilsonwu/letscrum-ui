import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    signIn: (state, actions) => {
      state.userId = actions.payload.userId
      state.username = actions.payload.username;
      state.accessToken = actions.payload.accessToken;
      state.refreshToken = actions.payload.refreshToken;
    },
    signOff: (state) => {
      state.userId = 0
      state.username = null;
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
})

export const { signIn, signOff } = userSlice.actions

export default userSlice.reducer