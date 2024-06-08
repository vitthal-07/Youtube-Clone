import React, { useState, useRef, useEffect } from "react";
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
    const [searchVisible, setSearchVisible] = useState(false);
    const searchInputRef = useRef(null);

    const handleSidebar = () => {
        dispatch(sidebarActions.toggle());
    };

    const handleSearchClick = () => {
        setSearchVisible(true);
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    const handleSearchBlur = () => {
        setSearchVisible(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchInputRef.current &&
                !searchInputRef.current.contains(event.target)
            ) {
                setSearchVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className='sticky top-0 left-0 z-50 px-4 py-2 flex justify-between items-center w-full bg-black text-white'>
            <div className='flex space-x-4 items-center w-[110px]'>
                {!searchVisible && (
                    <>
                        <GiHamburgerMenu
                            className='text-2xl cursor-pointer lg:block hidden'
                            onClick={handleSidebar}
                        />
                        <Link to='/' className='w-[80px]'>
                            <img
                                className='w-full h-fit'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr4JXRyXpBBKq-Us5WzgkQ_czHSdLPkDow&s'
                                alt='Yt-Logo'
                            />
                        </Link>
                    </>
                )}
            </div>
            <form
                className={`md:flex items-center ${
                    searchVisible ? "flex" : "hidden"
                } w-full md:w-[40%] h-10`}
                onSubmit={handleSearchSubmit}
            >
                <div className='flex-grow p-1 border rounded-l-full border-gray-400 h-full'>
                    <input
                        type='text'
                        placeholder='Search'
                        ref={searchInputRef}
                        onBlur={handleSearchBlur}
                        className='bg-black w-full p-2 rounded-l-full outline-none text-md h-full'
                    />
                </div>
                <button className='w-16 pr-2 border rounded-r-full border-gray-400 bg-zinc-800 h-full items-center justify-center'>
                    <FaSearch className='text-2xl w-full' />
                </button>
            </form>
            {!searchVisible && (
                <div className='w-[15vw] flex items-center justify-between '>
                    <button
                        className='w-16 pr-2 h-full items-center justify-center md:hidden flex'
                        onClick={handleSearchClick}
                    >
                        <FaSearch className='text-2xl w-full' />
                    </button>
                    <MdVideoCall size='30px' className='md:block hidden' />
                    <IoMdNotifications
                        size='30px'
                        className='md:block hidden'
                    />
                    <div className='w-30'>
                        <Avatar
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s'
                            size='35'
                            round={true}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}
