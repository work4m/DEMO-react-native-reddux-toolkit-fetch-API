import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import apiCall from '../../Api/ApiModal';
import API_TYPES from '../../Api/ApiTypes';

const initialState = {
    data: {},
    dataLoader: false,
}

// First, create the thunk
export const fetchAppData = createAsyncThunk(
    'fetchAppData',
    async (userId, isIos) => {
        const bodyData = new FormData();
        bodyData.append('user_id', userId);
        bodyData.append('ios', isIos);

        const response = await apiCall('appHome', API_TYPES.POST, bodyData);

        return response;
    }
);

export const apiDataSlice = createSlice({
    name: 'apiData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAppData.pending, (state) => {
            state.dataLoader = true;
        }),
            builder.addCase(fetchAppData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.dataLoader = false;
            })
        builder.addCase(fetchAppData.rejected, (state, action) => {
            alert();
            state.dataLoader = false;
        })
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = apiDataSlice.actions;

export default apiDataSlice.reducer;