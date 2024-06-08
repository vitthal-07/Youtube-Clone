import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

export const VideoSection = () => {
    const videos = useSelector((state) => state.videos);
    const channels = useSelector((state) => state.channels);

    return (
        <div className='mt-10 gap-6 p-6 text-white grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
            {videos.map((video) => (
                <VideoItem
                    key={video.id}
                    video={video}
                    channelInfo={channels[video.id]}
                />
            ))}
        </div>
    );
};
