import React from "react";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";

const formatSubscriberCount = (count) => {
    if (count > 1000000) {
        return `${Math.floor(count / 1000000)}M subscribers`;
    } else if (count > 1000) {
        return `${Math.floor(count / 1000)}K subscribers`;
    }
    return `${count} subscribers`;
};

const ChannelInfo = ({ videoId }) => {
    const channels = useSelector((store) => store.channels);
    const currentChannel = channels[videoId];

    return (
        <div className='flex items-center justify-between w-[400px]'>
            <div className='flex w-[50%] justify-between'>
                <Avatar
                    src={currentChannel?.snippet?.thumbnails?.medium?.url || ""}
                    size='50'
                    round={true}
                />
                <div>
                    <div className='text-lg font-medium'>
                        {currentChannel?.snippet?.title}
                    </div>
                    <div>
                        {formatSubscriberCount(
                            currentChannel?.statistics?.subscriberCount
                        )}
                    </div>
                </div>
            </div>
            <button className='rounded-full text-md font-medium text-white p-2 w-16 bg-zinc-800'>
                Join
            </button>
            <button className='rounded-full bg-gray-100 text-md font-medium text-black p-2 w-24'>
                Subscribe
            </button>
        </div>
    );
};

export default ChannelInfo;
