import { createSlice } from "@reduxjs/toolkit";
import { getUserById, signIn } from "./authThunk";


const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("user_id");
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign In
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message || "Sign-in failed.";
      })

      // Get User by ID (Restore User)
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message || "User restoration failed.";
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
