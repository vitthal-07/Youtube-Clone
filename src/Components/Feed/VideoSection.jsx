import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "./VideoItem";
import { fetchVideosAsync } from "../../Services/FetchVideos";

export const VideoSection = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videos);

    useEffect(() => {
        dispatch(fetchVideosAsync());
    }, []);

    return (
        <div className='grid  grid-cols-4 gap-6 p-6 text-white'>
            {videos.map((video) => (
                <div className='w-full' key={video.id}>
                    <VideoItem video={video} />
                </div>
            ))}
        </div>
    );
};
