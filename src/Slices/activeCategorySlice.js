import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: "All",
    reducers: {
        changeCategory: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice;
