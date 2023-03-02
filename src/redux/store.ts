import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './posts/slice';
import filterReducer from './filter/slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        filter: filterReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()