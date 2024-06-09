import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeCategory } from "../../Slices/activeCategorySlice";
import { setSuggestions } from "../../Slices/showSuggestionSlice";
import { useNavigate } from "react-router";

const Searchbar = ({ searchVisible, setSearchVisible }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);
    const searchSuggestions = useSelector((state) => state.suggestions);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            dispatch(changeCategory(searchTerm));
            setSearchTerm("");
            setSearchVisible(false);
            navigate("/");
        }
    };

    const fetchSuggestions = async () => {
        if (searchTerm.trim() !== "") {
            try {
                const res = await axios.get(
                    `http://suggestqueries.google.com/complete/search?client=firefox&q=${searchTerm}`
                );
                console.log();
                dispatch(setSuggestions(res.data[1]));
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleSuggestionClick = (e, item) => {
        e.preventDefault();
        dispatch(changeCategory(item));
        dispatch(setSuggestions([]));
        setSearchTerm("");
        setShowSuggestions(false);
        setSearchVisible(false);
        navigate("/");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                setShowSuggestions(true);
                fetchSuggestions();
            } else {
                setShowSuggestions(false);
            }
        }, 250);

        return () => {
            clearTimeout(timer);
        };
    }, [searchTerm]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!searchInputRef.current.contains(event.target)) {
                setSearchVisible(false);
            }
            setShowSuggestions(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <form
            className={`md:flex items-center w-full ${
                searchVisible ? "flex" : "hidden"
            } md:w-[35%] h-10`}
            onSubmit={handleSearchSubmit}
        >
            <div className='flex-grow p-1 border rounded-l-full border-gray-400 h-full'>
                <input
                    className='bg-black w-full py-2 px-3 rounded-l-full outline-none text-md font-medium h-full'
                    type='text'
                    placeholder='Search'
                    ref={searchInputRef}
                    value={searchTerm}
                    onFocus={() => setShowSuggestions(true)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button
                type='submit'
                className='w-16 pr-2 border rounded-r-full border-gray-400 bg-zinc-800 h-full items-center justify-center'
            >
                <FaSearch className='text-2xl w-full' />
            </button>
            {showSuggestions &&
                searchSuggestions &&
                searchSuggestions.length > 0 && (
                    <div className='flex flex-col py-2 z-50 absolute top-[52px] rounded-2xl text-md text-white text-wrap bg-gray-900 max-w-full h-fit overflow-x-hidden'>
                        {searchSuggestions.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => handleSuggestionClick(e, item)}
                                className='flex items-center text-left my-1 px-2 w-full justify-start hover:bg-slate-700'
                            >
                                <CiSearch
                                    size={20}
                                    className='w-10 flex-shrink-0'
                                />
                                <div className='flex mx-2 flex-grow p-1 min-w-[80%] text-wrap truncate'>
                                    {item}
                                </div>
                            </button>
                        ))}
                    </div>
                )}
        </form>
    );
};

export default Searchbar;
