import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from './asyncActions';
import { IPostItem, IPostsSliceState, Status } from "./types";

const initialState: IPostsSliceState = {
    items: [],
    status: Status.LOADING
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPostItem[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchPosts.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        })

        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});

export default postsSlice.reducer;