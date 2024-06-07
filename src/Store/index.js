import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../Slices/videosSlice";
import channelsSlice from "../Slices/channelsSlice";
import sidebarSlice from "../Slices/SidebarSlice";

const store = configureStore({
    reducer: {
        videos: videosSlice.reducer,
        channels: channelsSlice.reducer,
        sidebar: sidebarSlice.reducer,
    },
});

export default store;
