import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { ChatMessage } from "./ChatMessage";

export const LiveChat = () => {
    return (
        <div className='border border-gray-500 rounded-lg w-full'>
            <div className='flex justify-between items-center p-3 border-b border-gray-500 z-15'>
                <div className='text-md font-semibold '>Top chat</div>
                <div className='flex space-x-2 items-center '>
                    <HiDotsVertical size={24} />
                    <RiCloseLargeFill size={32} />
                </div>
            </div>
            <div className='h-[30rem] overflow-y-auto p-3 '>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            <div className='flex justify-between items-center p-3 border-t border-gray-500 '>
                <div className='flex bg-zinc-800 rounded-full justify-evenly items-center p-1 w-80'>
                    <input
                        type='text'
                        className='rounded-l-full w-full ml-2 text-xl p-1 bg-transparent outline-none font-md '
                        placeholder='Chat'
                    />
                    <BsEmojiSmile size={24} className='rounded-r-full w-10' />
                </div>
                <div className='rounded-full bg-zinc-800 h-10 w-10 flex justify-center items-center'>
                    <RiMoneyDollarBoxFill size={28} />
                </div>
            </div>
        </div>
    );
};
