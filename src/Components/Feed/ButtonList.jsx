import React from "react";

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
];

const ButtonList = () => {
    return (
        <div className='flex pl-5 bg-black w-full sticky top-0 space-x-2 truncate py-3 shadow-md overflow-hidden'>
            {topNavigationItems.map((item, index) => (
                <button
                    key={index}
                    className='py-2 px-3 text-sm text-white font-bold bg-zinc-900 rounded-md'
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;
