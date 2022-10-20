import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  token: null,
}

export const logIn = createAsyncThunk(
  'users/logIn',
  async({email, password}) => {
    const { item } = await axios.post('localhost:3001/letscrum/api/users', {
      email: email,
      password: password
    });
    return item.token.accessToken
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.pending.type]: (state) => {
      state.loading = true;
    },
    [logIn.fulfilled.type]: (state, action) => {
      state.loading = true;
      state.token = action.payload.data;
    },
    [logIn.rejected.type]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    }
  }
})

export const {lonIn} = userSlice.actions
export default userSlice.reducer