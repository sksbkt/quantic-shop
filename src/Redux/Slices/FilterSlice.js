import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // filter: { sortBy: '', order: '', availability: '' },
    filter: { sortBy: '', ascending: false, availability: false },
    search: ''
};
export const filterSlice = createSlice({
    name: 'ProductFilter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
});
export const { setFilter, setSearch } = filterSlice.actions;
export function selectFilter(state) {
    return state.productFilter.filter;
}
export function selectSearch(state) {
    return state.productFilter.search;
}
export default filterSlice.reducer;