import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../Slices/SidebarSlice";
import { Link, useNavigate } from "react-router-dom";
import { changeCategory } from "../../Slices/activeCategorySlice";
import axios from "axios";
import { setSuggestions } from "../../Slices/showSuggestionSlice";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    const dispatch = useDispatch();
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState(null);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const searchSuggestions = useSelector((store) => store.suggetions);
    const [suggestion, setSuggestion] = useState(false);

    console.log(searchSuggestions);
    const handleSidebar = () => {
        dispatch(sidebarActions.toggle());
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            dispatch(changeCategory(searchTerm));
            setSearchTerm(null);
            setSearchVisible(false);
            navigate("/");
        }
    };

    const fetchSuggestions = async () => {
        if (searchTerm) {
            try {
                const res = await axios.get(
                    `http://suggestqueries.google.com/complete/search?client=firefox&q=${searchTerm}`
                );
                dispatch(setSuggestions(res.data[1]));
            } catch (error) {
                console.error(error);
            }
        }
    };
    const showSuggestion = () => {
        setSuggestion(true);
    };

    const suggestionClick = (item) => {
        dispatch(changeCategory(item));
        setSearchTerm(item);
    };

    useEffect(() => {
        if (searchTerm) {
            fetchSuggestions();
        }
    }, [searchTerm]);

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
                } w-full md:w-[35%] h-10`}
                onSubmit={handleSearchSubmit}
            >
                <div className='flex-grow p-1 border rounded-l-full border-gray-400 h-full'>
                    <input
                        className='bg-black w-full py-2 px-3 rounded-l-full outline-none text-md font-medium h-full'
                        type='text'
                        placeholder='Search'
                        ref={searchInputRef}
                        value={searchTerm}
                        onFocus={showSuggestion}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='w-16 pr-2 border rounded-r-full border-gray-400 bg-zinc-800 h-full items-center justify-center'
                >
                    <FaSearch className='text-2xl w-full' />
                </button>
                {suggestion && !(searchSuggestions.length === 0) && (
                    <div className='flex flex-col py-2 z-50 absolute top-[52px] rounded-2xl text-md text-white text-wrap bg-gray-900 max-w-full h-fit overflow-x-hidden'>
                        {searchSuggestions.map((item, idx) => {
                            return (
                                <div className='flex items-center my-1 px-2 w-full justify-start hover:bg-slate-700'>
                                    <CiSearch size={20} />
                                    <button
                                        onClick={() => suggestionClick(item)}
                                        key={idx}
                                        className='flex mx-2 flex-grow text-left p-1 min-w-[80%] text-wrap truncate'
                                    >
                                        {item}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </form>
            {!searchVisible && (
                <div className='w-[15vw] flex items-center justify-between '>
                    <button
                        className='w-16 pr-2 h-full items-center justify-center md:hidden flex'
                        onClick={() => setSearchVisible(true)}
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
