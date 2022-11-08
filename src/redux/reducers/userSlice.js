import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  accessToken: null,
  refreshToken: null,
  userId: null,
  userName: null,
}

export const signIn = createAsyncThunk(
  'users/signIn',
  async ({ userName, password }) => {
    try {
      const response = await axios.post('https://imoogoo.com/api/v1/signin', {
        name: userName,
        password: password,
      })
      console.log("POST response: ", response);
      return response.data.item;
    } catch(error) {
      console.log("POST error: ", error.message);
      return error.message
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOff: (state) => {
      state.userId = 0;
      state.userName = null;
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      console.log("fullfilled action.payload: ", action.payload);
      state.accessToken = action.payload.token.accessToken;
      state.refreshToken = action.payload.token.refreshToken;
      state.userId = action.payload.id;
      state.userName = action.payload.name;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("rejected action.payload: ", action);
    }
  }
})

export const { signOff } = userSlice.actions
export default userSlice.reducer