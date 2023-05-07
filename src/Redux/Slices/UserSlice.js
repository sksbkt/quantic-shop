import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions;
export function selectUser(state) {
    console.log(state);
    return state.userReducer.user;
}
export default userSlice.reducer;