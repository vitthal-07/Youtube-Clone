import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyCP_gh2uOnizHUaG9KKh51mBx_bEjypMXI";

export const fetchVideosAsync = createAsyncThunk(
    "videos/fetchVideos",
    async () => {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`
        );
        return response.data.items;
    }
);

export const fetchChannelsAsync = createAsyncThunk(
    "channels/fetchChannels",
    async (uniqueIdsMap) => {
        const channels = {};
        await Promise.all(
            uniqueIdsMap.map(async (idMap) => {
                const response = await axios.get(
                    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${idMap.channelId}&key=${API_KEY}`
                );
                const channel = response.data.items[0];
                if (channel) {
                    channels[idMap.videoId] = channel;
                }
            })
        );
        return channels;
    }
);
