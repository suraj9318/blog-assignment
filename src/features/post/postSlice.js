import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    post : [],
    loading : false,
    error : false
}

const postSlice = createSlice({
    name : "allJobs",
    initialState,
    
})

export default postSlice.reducer;