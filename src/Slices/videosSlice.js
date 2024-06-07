import { createSlice } from "@reduxjs/toolkit";
import { fetchVideosAsync } from "../Services/FetchVideos";

const videosSlice = createSlice({
    name: "videos",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVideosAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const videosAction = videosSlice.actions;
export default videosSlice;
