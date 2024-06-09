import { createSlice } from "@reduxjs/toolkit";

const showSuggestionSlice = createSlice({
    name: "suggestions",
    initialState: [],
    reducers: {
        setSuggestions: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSuggestions } = showSuggestionSlice.actions;
export default showSuggestionSlice;
