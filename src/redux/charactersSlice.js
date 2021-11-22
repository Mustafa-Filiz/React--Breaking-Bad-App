import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const char_limit = 12;

export const fetchCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (page) => {
        const res = await axios.get(
            `${
                process.env.REACT_APP_API_BASE_URL
            }/characters?limit=${char_limit}&offset=${page * char_limit}`
        );
        return res.data;
    }
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        isLoading: false,
        error: '',
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        // fetch data
        [fetchCharacters.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.isLoading = false;
            state.page = state.page + 1;

            if (action.payload.length < 12) {
                state.hasNextPage = false;
            }
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export default charactersSlice.reducer;
