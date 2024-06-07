import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: "home", mode: "main" };

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        hideSidebar: (state) => {
            return { page: "watch", mode: "hide" };
        },
        mainSidebar: (state) => {
            return { page: "home", mode: "main" };
        },
        toggle: (state) => {
            if (state.page === "home") {
                if (state.mode === "main") return { ...state, mode: "mini" };
                else if (state.mode === "mini")
                    return { ...state, mode: "main" };
                else if (state.mode === "hide")
                    return { ...state, mode: "main" };
            } else if (state.page === "watch") {
                if (state.mode === "main") return { ...state, mode: "hide" };
                else if (state.mode === "hide")
                    return { ...state, mode: "main" };
            }
            return state;
        },
    },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice;
