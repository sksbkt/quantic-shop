import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: ''
};
export const filterSlice = createSlice({
    name: 'ProductFilter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        clearFilter: (state) => {
            state.filter = ''
        }
    }
});
export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer