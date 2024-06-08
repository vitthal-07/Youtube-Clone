import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../Slices/videosSlice";
import channelsSlice from "../Slices/channelsSlice";
import sidebarSlice from "../Slices/SidebarSlice";
import messageSlice from "../Slices/ChatMessageSlice";
import categorySlice from "../Slices/activeCategorySlice";

const store = configureStore({
    reducer: {
        videos: videosSlice.reducer,
        channels: channelsSlice.reducer,
        sidebar: sidebarSlice.reducer,
        messages: messageSlice.reducer,
        category: categorySlice.reducer,
    },
});

export default store;
