import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPostItem } from "./types";

export const fetchPosts = createAsyncThunk<IPostItem[]>('post/fetchPostsStatus', async () => {
    const { data } = await axios.get<IPostItem[]>(
        'https://jsonplaceholder.typicode.com/posts',
    );
    return data;
});