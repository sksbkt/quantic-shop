import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
    ascending: false,
};
export const filterSlice = createSlice({
    name: 'ProductFilter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setAscending: (state, action) => {
            state.ascending = action.payload;
        }
    }
});
export const { setFilter, setAscending } = filterSlice.actions;
export default filterSlice.reducer;