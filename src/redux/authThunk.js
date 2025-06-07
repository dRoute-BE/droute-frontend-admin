import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserByIdAPI, signInAPI } from "../utils/api/authApi";

// Helper to handle errors
export const handleAxiosError = (error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return {
        message: "Network error. Please try again later.",
        statusCode: 500,
        data: null,
        errorCode: "NETWORK_ERROR",
        timestamp: Date.now(),
      };
    } else {
      return { message: error.message };
    }
  } else {
    return { message: "Unexpected error occurred" };
  }
};

// Sign In Thunk
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signInAPI(data);
      return response.data;
    } catch (error) {
      console.error("Error in signIn:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Get User By ID Thunk (for restoring session)
export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getUserByIdAPI(userId);
      return response.data;
    } catch (error) {
      console.error("Error in getUserById:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
