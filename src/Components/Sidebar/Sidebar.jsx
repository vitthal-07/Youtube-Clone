import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

import SidebarSection from "./SidebarSection";
import {
    exploreItems,
    libraryAndHistoryItems,
    moreYoutubeItems,
    navigationItems,
    subscriptionItems,
} from "./SidebarUtils/sidebarData";

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
        <div className='sticky top-0 left-0 w-[17rem] h-[calc(100vh-56px)] pl-6 bg-black text-white flex-shrink-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black'>
            <SidebarSection
                items={navigationItems}
                iconMap={iconMap}
                title=''
            />
            <SidebarSection
                items={libraryAndHistoryItems}
                iconMap={iconMap}
                title='You >'
            />
            <SidebarSection
                items={subscriptionItems}
                iconMap={{}}
                title='Subscription'
            />
            <SidebarSection
                items={exploreItems}
                iconMap={iconMap}
                title='Explore'
            />
            <SidebarSection
                items={moreYoutubeItems}
                iconMap={{}}
                title='More from YouTube'
            />
        </div>
    );
};
