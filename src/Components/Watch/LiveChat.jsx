import React, { useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Slices/ChatMessageSlice";
import {
    generateRandomMessage,
    generateRandomUsername,
} from "./WatchUtils/helper";

export const LiveChat = () => {
    const input = useRef();
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.messages);

    const handleMessage = (e) => {
        e.preventDefault();
        if (input.current.value.trim() !== "") {
            dispatch(
                addMessage({
                    userName: "vitthal2104",
                    message: input.current.value,
                })
            );
            input.current.value = "";
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const message = {
                userName: generateRandomUsername(),
                message: generateRandomMessage(),
            };
            dispatch(addMessage(message));
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className='border border-gray-500 rounded-lg w-full'>
            <div className='flex justify-between items-center p-3 border-b border-gray-500 z-15'>
                <div className='text-md font-semibold '>Top chat</div>
                <div className='flex space-x-2 items-center '>
                    <HiDotsVertical size={24} />
                    <RiCloseLargeFill size={32} />
                </div>
            </div>
            <div className='h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black sc p-3 flex flex-col-reverse'>
                {messages.map((item, idx) => {
                    return <ChatMessage key={idx} item={item} />;
                })}
            </div>
            <div className='flex justify-between items-center p-3 border-t border-gray-500 '>
                <div className='bg-zinc-800 rounded-full justify-evenly items-center p-1 w-80'>
                    <form action='' className='flex' onSubmit={handleMessage}>
                        <input
                            type='text'
                            ref={input}
                            className='rounded-l-full w-full ml-2 text-xl p-1 bg-transparent outline-none font-md '
                            placeholder='Chat'
                        />
                        <button>
                            <BsEmojiSmile
                                size={24}
                                className='rounded-r-full w-10'
                            />
                        </button>
                    </form>
                </div>
                <button className='rounded-full bg-zinc-800 h-10 w-10 flex justify-center items-center'>
                    <RiMoneyDollarBoxFill size={28} />
                </button>
            </div>
        </div>
    );
};
