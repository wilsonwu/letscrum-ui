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
  async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3001/letscrum/api/users', {
        email: email,
        password: password,
      })
      console.log("POST response: ", response);
      return response.data.item;
    } catch(error) {
      console.log("POST error: ", error.message);
      return error.message
    }
    // [response.data.item.token.accessToken, response.data.item.token.refreshToken, response.data.item.id, response.data.item.name]
    // {
    //   accessToken: response.data.item.token.accessToken, 
    //   refreshToken: response.data.item.token.refreshToken,
    //   userId: response.data.item.id,
    //   userName: response.data.item.name,
    // }
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
      // state.accessToken = action.payload[accessToken];
      // state.refreshToken = action.payload[refreshToken];
      // state.userId = action.payload[userId];
      // state.username = action.payload[userName];
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