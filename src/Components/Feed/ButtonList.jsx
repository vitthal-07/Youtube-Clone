import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../Slices/activeCategorySlice";

const topNavigationItems = [
    "All",
    "News",
    "Game of Thrones",
    "Programming",
    "Music",
    "Sports",
    "Gaming",
    "Movies",
    "Live",
    "Fashion",
    "Learning",
    "Podcasts",
    "Science",
    "Technology",
    "Travel",
];

const ButtonList = () => {
    const [activeBtn, setActivebtn] = useState("All");
    const dispatch = useDispatch();
    const videoByTag = (tag) => {
        if (activeBtn !== tag) {
            dispatch(changeCategory(tag));
            setActivebtn(tag);
        }
    };

    return (
        <div className='fixed bg-black w-full md:max-w-[calc(98vw-14rem)]'>
            <div className='flex overflow-x-scroll no-scrollbar'>
                {topNavigationItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => videoByTag(item)}
                        className={`py-2 px-3 text-sm font-bold 
                            ${
                                activeBtn === item
                                    ? "bg-gray-200 text-black"
                                    : "bg-slate-900 text-white hover:bg-gray-700"
                            } 
                         rounded-md m-1 whitespace-nowrap`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
