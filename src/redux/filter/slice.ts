import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState } from "./types";

const initialState: IFilterSliceState = {
    sortType: 'id',
    searchValue: '',
    activePage: 1,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload.trim();
            state.activePage = 1;
        },

        setActivePage(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        },

        setSortType(state, action: PayloadAction<string>) {
            state.sortType = action.payload;
            state.activePage = 1;
        },
    },
});

export const {
    setSearchValue,
    setActivePage,
    setSortType,
} = filterSlice.actions;

export default filterSlice.reducer;