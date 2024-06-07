import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

import { Link } from "react-router-dom";

export const VideoSection = () => {
    const videos = useSelector((state) => state.videos);
    const channels = useSelector((state) => state.channels);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 text-white'>
            {videos.map((video) => (
                <Link
                    className='w-full '
                    key={video.id}
                    to={`watch?v=${video.id}`}
                >
                    <VideoItem video={video} channelInfo={channels[video.id]} />
                </Link>
            ))}
        </div>
    );
};
