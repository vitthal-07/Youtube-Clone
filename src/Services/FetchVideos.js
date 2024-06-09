import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "AIzaSyBbx6wSu7sqVIb1ZE3Sdb11j5q36kSATeM";
// const API_KEY = "AIzaSyAnnhBo7KHmORTVLHteBujKy9tnOqgisPY";

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
            uniqueIdsMap.map(async (id) => {
                const response = await axios.get(
                    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
                );
                const channel = response.data.items[0];
                if (channel) {
                    channels[id] = channel;
                }
            })
        );
        return channels;
    }
);
export const fetchVideosByCategoryAsync = createAsyncThunk(
    "videos/fetchVideosByCategory",
    async (tag) => {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${tag}&key=${API_KEY}`
        );
        return response.data.items;
    }
);
