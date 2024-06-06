import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { showSidebarAction } from "../../Slices/showSidebarSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const handelSidebar = () => {
        dispatch(showSidebarAction.toggle());
    };
    return (
        <nav className='sticky top-0 left-0 z-50 px-4 py-2 px-6 flex justify-between items-center w-full bg-black text-white'>
            <div className='flex space-x-4 items-center w-[8%]'>
                <GiHamburgerMenu
                    className='text-2xl cursor-pointer'
                    onClick={handelSidebar}
                />
                <img
                    className='w-[45%]'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr4JXRyXpBBKq-Us5WzgkQ_czHSdLPkDow&s'
                    alt='Yt-Logo'
                />
            </div>
            <div className='flex items-center w-[30%] h-8'>
                <div className='flex-grow p-1 border rounded-l-full border-gray-400 h-full'>
                    <input
                        type='text'
                        className='bg-black w-full p-2 outline-none text-md h-full'
                    />
                </div>
                <button className='px-2 pb-3 pt-1 w-12 border rounded-r-full border-gray-400 bg-zinc-800 h-full'>
                    <FaSearch className='text-xl' />
                </button>
            </div>
            <div className='w-48 flex items-center space-x-12'>
                <MdVideoCall size='30px' />
                <IoMdNotifications size='30px' />
                <Avatar
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s'
                    size='35'
                    round={true}
                />
            </div>
        </nav>
    );
}
