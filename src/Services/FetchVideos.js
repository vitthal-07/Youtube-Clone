import axios from "axios";
import { videosAction } from "../Slices/videosSlice";
import { useDispatch } from "react-redux";

const API_KEY = "AIzaSyAnnhBo7KHmORTVLHteBujKy9tnOqgisPY";
const YOUTUBE_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=";

export const fetchVideos = async () => {
    try {
        const res = await axios.get(YOUTUBE_VIDEO_API + API_KEY);
        return res?.data?.items;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
};

export const fetchVideosAsync = () => async (dispatch) => {
    const data = await fetchVideos();
    dispatch(videosAction.setVideos(data));
};
