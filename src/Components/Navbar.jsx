import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "react-avatar";

export default function Navbar() {
    return (
        <nav className='relative sticky top-0 px-4 py-2 px-6 flex justify-between items-center w-[100%] bg-black text-white '>
            <div className='flex justify-between w-36 items-center w-[8%]'>
                <GiHamburgerMenu className='text-2xl' />
                <img
                    className='w-[50%]'
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
                <button className='p-2 w-12 border rounded-r-full border-gray-400 h-full'>
                    <FaSearch className='text-xl' />
                </button>
            </div>
            <div className='w-48 flex items-center justify-between'>
                <MdVideoCall size='35px' />
                <IoMdNotifications size='35px' />
                <Avatar
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s'
                    size='45'
                    round={true}
                />
            </div>
        </nav>
    );
}
