import React from "react";
import Avatar from "react-avatar";
import { formatTimeAgo, formatViewCount } from "./FeedUtils/FormatVideoData";

const VideoItem = ({ video, channelInfo }) => {
    const { snippet, statistics } = video;
    const { title, channelTitle, thumbnails, publishedAt } = snippet;
    const { viewCount } = statistics;

    return (
        <div className='w-full cursor-pointer'>
            <img
                src={thumbnails.medium.url}
                className='w-full h-auto object-cover rounded-md'
                alt={title}
            />
            <div className='flex mt-3'>
                <div className='w-30'>
                    <Avatar
                        src={
                            channelInfo?.snippet?.thumbnails?.medium?.url || ""
                        }
                        size='30'
                        round={true}
                    />
                </div>
                <div className='ml-3 w-full'>
                    <div className='text-md font-bold'>{title}</div>
                    <div className='text-sm font-normal'>{channelTitle}</div>
                    <div className='text-sm font-normal'>
                        {formatViewCount(viewCount)} ·{" "}
                        {formatTimeAgo(publishedAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
