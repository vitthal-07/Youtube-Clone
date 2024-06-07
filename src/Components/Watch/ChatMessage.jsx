import React from "react";
import Avatar from "react-avatar";

export const ChatMessage = ({ item }) => {
    if (!item || !item.userName || !item.message) {
        return null; // Return null to render nothing if any property is missing
    }
    return (
        <div className='flex my-3'>
            <div className='w-[30px]'>
                <Avatar
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s'
                    size='28'
                    round={true}
                />
            </div>
            <div className='ml-3'>
                <span className='text-sm font-semibold text-zinc-400'>
                    {item.userName}{" "}
                </span>
                <span className='text-sm ml-2'>{item.message}</span>
            </div>
        </div>
    );
};
