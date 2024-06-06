import { configureStore, createSlice } from "@reduxjs/toolkit";

const showSidebarSlice = createSlice({
    name: "showSidebar",
    initialState: "true",
    reducers: {
        toggle: (state) => {
            return (state = !state);
        },
    },
});

export const showSidebarAction = showSidebarSlice.actions;
export default showSidebarSlice;
