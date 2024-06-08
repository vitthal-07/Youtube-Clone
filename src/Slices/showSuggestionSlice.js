import { createSlice } from "@reduxjs/toolkit";

const showSuggestionSlice = createSlice({
    name: "suggetions",
    initialState: [],
    reducers: {
        setSuggestions: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSuggestions } = showSuggestionSlice.actions;
export default showSuggestionSlice;
