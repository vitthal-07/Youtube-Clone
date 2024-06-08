import React from "react";
import Avatar from "react-avatar";

const formatSubscriberCount = (count) => {
    if (count > 1000000) {
        return `${Math.floor(count / 1000000)}M subscribers`;
    } else if (count > 1000) {
        return `${Math.floor(count / 1000)}K subscribers`;
    }
    return `${count} subscribers`;
};

const ChannelInfo = ({ currChannel }) => {
    return (
        <div className='flex items-center justify-between w-[450px] overflow-hidden'>
            <div className='flex w-[300px] justify-between'>
                <div className='w-16'>
                    <Avatar
                        src={
                            currChannel?.snippet?.thumbnails?.medium?.url || ""
                        }
                        size='50'
                        round={true}
                    />
                </div>
                <div className='w-full'>
                    <div className='text-lg font-medium'>
                        {currChannel?.snippet?.title}
                    </div>
                    <div>
                        {formatSubscriberCount(
                            currChannel?.statistics?.subscriberCount
                        )}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between w-[175px]'>
                <button className='rounded-full text-md font-medium text-white p-2 w-16 bg-zinc-800'>
                    Join
                </button>
                <button className='rounded-full bg-gray-100 text-md font-medium text-black p-2 w-24'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default ChannelInfo;
