import { createSlice } from "@reduxjs/toolkit";
import {
    fetchVideosAsync,
    fetchVideosByCategoryAsync,
} from "../Services/FetchVideos";

const videosSlice = createSlice({
    name: "videos",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVideosAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(
            fetchVideosByCategoryAsync.fulfilled,
            (state, action) => {
                return action.payload;
            }
        );
    },
});

export const videosAction = videosSlice.actions;
export default videosSlice;
