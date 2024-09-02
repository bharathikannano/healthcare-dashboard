// src/features/api/apiSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get the environment variables
const API_URL = import.meta.env.VITE_API_URL;
const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

// Generate the authorization header
const auth = btoa(`${username}:${password}`);

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get(API_URL, {
    headers: {
      'Authorization': `Basic ${auth}`,
    },
    redirect: 'follow',
  });
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;