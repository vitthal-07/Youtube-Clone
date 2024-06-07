import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../Slices/SidebarSlice";
import { Link } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();
    const handelSidebar = () => {
        dispatch(sidebarActions.toggle());
    };
    return (
        <nav className='sticky top-0 left-0 z-50 px-4 py-2 px-6 flex justify-between items-center w-full bg-black text-white'>
            <div className='flex space-x-4 items-center w-[110px]'>
                <GiHamburgerMenu
                    className='text-2xl cursor-pointer lg:block hidden'
                    onClick={handelSidebar}
                />
                <Link to='/' className='w-[80px]'>
                    <img
                        className='w-full'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr4JXRyXpBBKq-Us5WzgkQ_czHSdLPkDow&s'
                        alt='Yt-Logo'
                    />
                </Link>
            </div>
            <div className='flex items-center w-[40%] h-10'>
                <div className='flex-grow p-1 border rounded-l-full border-gray-400 h-full'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-black w-full p-2 rounded-l-full outline-none text-md h-full'
                    />
                </div>
                <button className='w-16 pr-2 border rounded-r-full border-gray-400 bg-zinc-800 h-full items-center justify-center'>
                    <FaSearch className='text-2xl w-full' />
                </button>
            </div>
            <div className='w-40 flex items-center justify-between '>
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
