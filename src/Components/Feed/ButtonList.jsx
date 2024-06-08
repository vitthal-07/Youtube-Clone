import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const topNavigationItems = [
    { title: "All" },
    { title: "News" },
    { title: "Game of Thrones" },
    { title: "Programming" },
    { title: "Music" },
    { title: "Sports" },
    { title: "Gaming" },
    { title: "Movies" },
    { title: "Live" },
    { title: "Fashion" },
    { title: "Learning" },
    { title: "Podcasts" },
    { title: "Science" },
    { title: "Technology" },
    { title: "Travel" },
    { title: "All" },
    { title: "News" },
    { title: "Game of Thrones" },
    { title: "Programming" },
    { title: "Music" },
    { title: "Sports" },
    { title: "Gaming" },
    { title: "Movies" },
    { title: "Live" },
    { title: "Fashion" },
    { title: "Learning" },
    { title: "Podcasts" },
    { title: "Science" },
    { title: "Technology" },
    { title: "Travel" },
];

const ButtonList = () => {
    return (
        <div className='fixed bg-black w-full md:max-w-[calc(98vw-14rem)]'>
            <div className='flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black no-scrollbar'>
                {topNavigationItems.map((item, index) => (
                    <button
                        key={index}
                        className='py-2 px-3 text-sm text-white font-bold bg-zinc-700 hover:bg-zinc-800 rounded-md m-1 whitespace-nowrap'
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
