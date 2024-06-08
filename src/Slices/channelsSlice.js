import { createSlice } from "@reduxjs/toolkit";
import { fetchChannelsAsync } from "../Services/FetchVideos";

const channelsSlice = createSlice({
    name: "channels",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChannelsAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const channelsAction = channelsSlice.actions;
export default channelsSlice;
