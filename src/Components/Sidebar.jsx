import React from "react";
import SidebarItem from "./SidebarItem";
import {
    exploreItems,
    libraryAndHistoryItems,
    moreYoutubeItems,
    navigationItems,
    subscriptionItems,
} from "../Data/SidebarData";

const iconMap = {
    IoHomeOutline,
    SiYoutubeshorts,
    MdOutlineSubscriptions,
    ImProfile,
    FaHistory,
    AiOutlineLike,
    LiaDownloadSolid,
    MdPlaylistPlay,
    MdOutlineVideoSettings,
    FaRegClock,
};

export const Sidebar = () => {
    return (
        <div className='w-64 pl-6 sticky top-0 h-[94vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 bg-black text-white scrollbar-track-black'>
            <div className='mt-2'>
                {navigationItems.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <SidebarItem
                            key={index}
                            icon={<IconComponent size='22px' />}
                            title={item.title}
                        />
                    );
                })}
            </div>
            <div className='border-t border-gray-400'>
                <div className='text-lg font-bold my-4'>You {">"}</div>
                {libraryAndHistoryItems.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <SidebarItem
                            key={index}
                            icon={<IconComponent size='22px' />}
                            title={item.title}
                        />
                    );
                })}
            </div>
            <div className='border-t border-gray-400'>
                <div className='text-lg font-bold my-4'>Subscription</div>
                {subscriptionItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        src={item.src}
                        title={item.title}
                    />
                ))}
            </div>
            <div className='border-t border-gray-400'>
                <div className='text-lg font-bold my-4'>Explore</div>
                {exploreItems.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <SidebarItem
                            key={index}
                            icon={<IconComponent size='22px' />}
                            title={item.title}
                        />
                    );
                })}
            </div>
            <div className='border-t border-gray-400'>
                <div className='text-lg font-bold my-4'>More from YouTube</div>
                {moreYoutubeItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        src={item.src}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
};
