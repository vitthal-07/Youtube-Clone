import React from "react";
import Avatar from "react-avatar";
import { formatTimeAgo, formatViewCount } from "./FeedUtils/FormatVideoData";
import { Link } from "react-router-dom";

const VideoItem = ({ video, channelInfo }) => {
    const { snippet, statistics } = video;
    const { title, channelTitle, thumbnails, publishedAt } = snippet;
    const { viewCount } = statistics;

    return (
        <Link to={`watch?v=${video.id}`} className='w-full'>
            <img
                src={thumbnails.medium.url}
                className='w-full h-auto object-cover rounded-md'
                alt={title}
            />
            <div className='flex mt-3'>
                <Avatar
                    src={channelInfo?.snippet?.thumbnails?.medium?.url || ""}
                    size='30'
                    round={true}
                />
                <div className='ml-3 w-full'>
                    <div className='text-md font-bold'>{title}</div>
                    <div className='text-sm font-normal'>{channelTitle}</div>
                    <div className='text-sm font-normal'>
                        {formatViewCount(viewCount)} ·{" "}
                        {formatTimeAgo(publishedAt)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoItem;
