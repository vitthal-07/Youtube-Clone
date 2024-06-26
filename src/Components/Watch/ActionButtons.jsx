import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiDotsHorizontal } from "react-icons/hi";

const formatLikeCount = (count) => {
    if (count > 1000000) {
        return `${Math.floor(count / 1000000)}M`;
    } else if (count > 1000) {
        return `${Math.floor(count / 1000)}K`;
    }
    return `${count}`;
};

const ActionButtons = ({ currentVideo }) => {
    return (
        <div className='flex items-center justify-between md:w-[40%] w-full md:my-0 my-3'>
            <div className='rounded-full bg-zinc-800 text-md font-medium text-white p-2 w-32 flex justify-between'>
                <button className='flex w-[400px] justify-between mx-2'>
                    <AiOutlineLike size={24} />
                    <div className='ml-1'>
                        {currentVideo?.statistics?.likeCount &&
                            formatLikeCount(
                                currentVideo?.statistics?.likeCount
                            )}
                    </div>
                </button>
                <button className='border-l pl-2 border-gray-600 w-[40%]'>
                    <AiOutlineDislike size={24} />
                </button>
            </div>
            <button className='rounded-full bg-zinc-800 text-md font-medium text-white p-2 w-20 flex justify-between'>
                <PiShareFat size={24} />
                Share
            </button>
            <button className='rounded-full bg-zinc-800 text-md font-medium text-white p-2 w-28 flex justify-between'>
                <LiaDownloadSolid size={24} />
                Download
            </button>
            <button className='rounded-[50%] bg-zinc-800 text-md font-medium text-white p-2  flex'>
                <HiDotsHorizontal size={24} />
            </button>
        </div>
    );
};

export default ActionButtons;
