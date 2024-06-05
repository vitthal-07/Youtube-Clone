import React from "react";

const ButtonList = () => {
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
    ];
    return (
        <div className='flex space-x-4 overflow-x-auto py-2 bg-black shadow-md'>
            {topNavigationItems.map((item, index) => (
                <button
                    key={index}
                    className='px-4 py-2 whitespace-nowrap text-gray-700 hover:text-black hover:bg-gray-200 rounded-md'
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;
