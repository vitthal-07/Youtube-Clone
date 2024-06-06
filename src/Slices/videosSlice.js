import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState: [],
    reducers: {
        setVideos: (state, action) => {
            return action.payload;
        },
    },
});

export const videosAction = videosSlice.actions;
export default videosSlice;
