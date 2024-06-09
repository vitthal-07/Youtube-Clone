import React from "react";
import { MdVideoCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "react-avatar";

const Controls = ({ setSearchVisible }) => {
    return (
        <div className='w-[15vw] flex items-center justify-between '>
            <button
                className='w-16 pr-2 h-full items-center justify-center md:hidden flex'
                onClick={() => setSearchVisible(true)}
            >
                <FaSearch className='text-2xl w-full' />
            </button>
            <MdVideoCall size='30px' className='md:block hidden' />
            <IoMdNotifications size='30px' className='md:block hidden' />
            <div className='w-30'>
                <Avatar
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s'
                    size='35'
                    round={true}
                />
            </div>
        </div>
    );
};

export default Controls;
