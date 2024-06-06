import { configureStore } from "@reduxjs/toolkit";
import showSidebarSlice from "../Slices/showSidebarSlice";
import videosSlice from "../Slices/videosSlice";

const store = configureStore({
    reducer: {
        showSidebar: showSidebarSlice.reducer,
        videos: videosSlice.reducer,
    },
});

export default store;
